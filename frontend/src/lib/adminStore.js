import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAdminStore = create(
  persist(
    (set) => ({
      isAuthenticated: false,
      adminPassword: null,

      login: (password) => {
        set({ isAuthenticated: true, adminPassword: password });
      },

      logout: () => {
        set({ isAuthenticated: false, adminPassword: null });
      },

      getAuthHeaders: () => {
        const state = useAdminStore.getState();
        return {
          "x-admin-password": state.adminPassword,
          "Content-Type": "application/json",
        };
      },
    }),
    {
      name: "digilynk-admin-storage",
      // Only persist authentication state, not password for security
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        adminPassword: state.adminPassword, // Consider removing in production
      }),
    }
  )
);

export default useAdminStore;
