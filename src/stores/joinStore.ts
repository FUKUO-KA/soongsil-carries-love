import { JoinRequest } from '@/api/types/request';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface JoinStore {
  joinRequest: JoinRequest;
  updateJoinField: (fields: Partial<JoinRequest>) => void;
}

const useJoinStore = create(
  persist<JoinStore>(
    (set) => ({
      joinRequest: {
        email: '',
        password: '',
        college: '',
        department: '',
        nickname: '',
        studentId: '',
        gender: '',
        schoolCode: '',
      },

      updateJoinField: (fields) =>
        set((state) => ({
          joinRequest: {
            ...state.joinRequest,
            ...fields,
          },
        })),
    }),
    {
      name: 'join-storage',
      storage: {
        getItem: async (name) => {
          const item = sessionStorage.getItem(name);
          return item ? JSON.parse(item) : null;
        },
        setItem: async (name, value) => {
          sessionStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: async (name) => {
          sessionStorage.removeItem(name);
        },
      },
      partialize: (state) => ({
        joinRequest: state.joinRequest,
        updateJoinField: state.updateJoinField,
      }),
    }
  )
);

export default useJoinStore;
