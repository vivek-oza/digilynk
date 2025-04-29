import { create } from "zustand";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";


export const useContactStore = create((set) => ({
  loading: false,
  success: false,
  error: null,
  
  submitContact: async (data) => {
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
