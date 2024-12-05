import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface UserStore {
  email: string;
  password: string;
  setUser: (userData: Partial<UserStore>) => void;
  clearUser: () => void;
}

const useUserStore = create(
  persist<UserStore>(
    (set) => ({
      email: '',
      password: '',
      setUser: (userData) =>
        set((state) => ({
          ...state,
          ...userData,
        })),
      clearUser: () =>
        set(() => ({
          email: '',
          password: '',
        })),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useUserStore;
