import { create } from 'zustand';
import axios from 'axios';
import useAuthStore from './useAuthStore';

const API_URL = import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/api/modules/` : '/api/modules/';

const useProgressStore = create((set, get) => ({
  modules: [],
  currentModule: null,
  isLoading: false,
  isError: false,
  message: '',

  getModules: async () => {
    set({ isLoading: true });
    try {
      const response = await axios.get(API_URL);
      set({ modules: response.data, isLoading: false });
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      set({ isLoading: false, isError: true, message });
    }
  },

  getModuleById: async (id) => {
    set({ isLoading: true });
    try {
      const response = await axios.get(API_URL + id);
      set({ currentModule: response.data, isLoading: false });
    } catch (error) {
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
      set({ isLoading: false, isError: true, message });
    }
  },

  completeModule: async (id) => {
    const { user, updateUser } = useAuthStore.getState();
    if (!user) return;

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      await axios.post(API_URL + id + '/complete', {}, config);
      
      // Update local state so Dashboard unlocks the next module instantly
      const currentCompleted = user.completedModules || [];
      if (!currentCompleted.includes(id)) {
        updateUser({
          ...user,
          completedModules: [...currentCompleted, id]
        });
      }
    } catch (error) {
      console.error('Error completing module', error);
    }
  }
}));

export default useProgressStore;
