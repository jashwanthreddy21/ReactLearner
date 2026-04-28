import { create } from 'zustand';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/api/auth/` : '/api/auth/';

const useAuthStore = create((set) => ({
  user: JSON.parse(sessionStorage.getItem('user')) || null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',

  register: async (userData) => {
    set({ isLoading: true });
    try {
      const response = await axios.post(API_URL + 'register', userData);
      if (response.data) {
        sessionStorage.setItem('user', JSON.stringify(response.data));
        set({ user: response.data, isLoading: false, isSuccess: true });
      }
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      set({ isLoading: false, isError: true, message });
    }
  },

  login: async (userData) => {
    set({ isLoading: true });
    try {
      const response = await axios.post(API_URL + 'login', userData);
      if (response.data) {
        sessionStorage.setItem('user', JSON.stringify(response.data));
        set({ user: response.data, isLoading: false, isSuccess: true });
      }
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      set({ isLoading: false, isError: true, message });
    }
  },

  logout: () => {
    sessionStorage.removeItem('user');
    set({ user: null });
  },

  updateUser: (updatedUser) => {
    sessionStorage.setItem('user', JSON.stringify(updatedUser));
    set({ user: updatedUser });
  },

  reset: () => set({ isLoading: false, isError: false, isSuccess: false, message: '' })
}));

export default useAuthStore;
