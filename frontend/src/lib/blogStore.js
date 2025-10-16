import { create } from "zustand";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const useBlogStore = create((set, get) => ({
  blogs: [],
  currentBlog: null,
  loading: false,
  error: null,

  // Fetch all blogs
  fetchBlogs: async (options = {}) => {
    set({ loading: true, error: null });
    try {
      const params = new URLSearchParams(options);
      const response = await axios.get(`${API_URL}/api/blog?${params}`);
      set({ blogs: response.data.data, loading: false });
      return response.data.data;
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  // Fetch single blog
  fetchBlog: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/api/blog/${id}`);
      set({ currentBlog: response.data.data, loading: false });
      return response.data.data;
    } catch (error) {
      set({ error: error.message, loading: false });
      throw error;
    }
  },

  // Create blog (admin)
  createBlog: async (blogData) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(
        `${API_URL}/api/blog/admin/create`,
        blogData
      );
      const newBlog = response.data.data;
      set((state) => ({
        blogs: [newBlog, ...state.blogs],
        loading: false,
      }));
      return newBlog;
    } catch (error) {
      set({ error: error.message, loading: false });
      console.error(
        "Create blog error:",
        error.response?.data || error.message
      );
      throw error;
    }
  },

  // Update blog (admin)
  updateBlog: async (id, blogData) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.put(
        `${API_URL}/api/blog/admin/${id}`,
        blogData
      );
      const updatedBlog = response.data.data;
      set((state) => ({
        blogs: state.blogs.map((blog) =>
          blog._id === id ? updatedBlog : blog
        ),
        currentBlog: updatedBlog,
        loading: false,
      }));
      return updatedBlog;
    } catch (error) {
      set({ error: error.message, loading: false });
      console.error(
        "Update blog error:",
        error.response?.data || error.message
      );
      throw error;
    }
  },

  // Delete blog (admin)
  deleteBlog: async (id) => {
    set({ loading: true, error: null });
    try {
      await axios.delete(`${API_URL}/api/blog/admin/${id}`);
      set((state) => ({
        blogs: state.blogs.filter((blog) => blog._id !== id),
        loading: false,
      }));
    } catch (error) {
      set({ error: error.message, loading: false });
      console.error(
        "Delete blog error:",
        error.response?.data || error.message
      );
      throw error;
    }
  },

  // Clear current blog
  clearCurrentBlog: () => set({ currentBlog: null }),
}));

export default useBlogStore;
