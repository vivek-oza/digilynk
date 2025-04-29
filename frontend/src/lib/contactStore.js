import { create } from "zustand";
import axios from "axios";

axios.defaults.withCredentials = true;

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
if (!API_BASE_URL) {
  console.error("VITE_API_BASE_URL is not set!");
}

export const useContactStore = create((set) => ({
  loading: false,
  success: false,
  error: null,

  submitContact: async (data) => {
    console.log("Submit contact Hit");
    console.log("Using API URL:", API_BASE_URL);
    set({ loading: true, success: false, error: null });
    try {
      await axios.post(`${API_BASE_URL}/api/contact`, data);
      set({ success: true });
    } catch (error) {
      console.error("API Error:", error);
      set({ error: error.response?.data?.error || "Something went wrong" });
    } finally {
      set({ loading: false });
    }
  },
}));
