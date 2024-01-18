import create from 'zustand';

interface AuthState {
  token: string | null;
  setToken: (Token: string | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  setToken: (token) => set({ token })
}));