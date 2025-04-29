import { create } from "zustand";
import axios from "axios";

axios.defaults.withCredentials = true;

// original
// const API_BASE_URL = process.env.VITE_API_BASE_URL || "http://localhost:5000";

// My implementation
// const API_BASE_URL = import.meta.env.NODE_ENV  === "development" ? "http://localhost:5000" : import.meta.env.VITE_API_BASE_URL;
const API_BASE_URL = "https://digilynk.onrender.com";

export const useContactStore = create((set) => ({
  loading: false,
  success: false,
  error: null,

  submitContact: async (data) => {
    console.log("Submit contact Hit");
    set({ loading: true, success: false, error: null });
    try {
      await axios.post(`${API_BASE_URL}/api/contact`, data);
      set({ success: true });
    } catch (error) {
      set({ error: error.response?.data?.error || "Something went wrong" });
    } finally {
      set({ loading: false });
    }
  },
}));
