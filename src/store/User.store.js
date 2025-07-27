import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: null, // User details (e.g., name, email, role)
  token: null, // Authentication token
  isAuthenticated: false, // Authentication status

  // Action to set user details
  setUser: (userData) => set({ user: userData, isAuthenticated: true }),

  // Action to set authentication token
  setToken: (token) => set({ token }),

  // Action to clear user data (e.g., on logout)
  clearUser: () => set({ user: null, token: null, isAuthenticated: false }),
}));

export default useUserStore;