import { create } from 'zustand';

interface User {
  full_name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  setUser: (user) => set({ user }),

  logout: () => {
    localStorage.removeItem('token');
    set({ user: null });
  },
}));
