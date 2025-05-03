import { create } from "zustand";
import { User } from "@/types/user.types";
import { TOKEN_STORAGE_KEY } from "@/shared/constants/auth.constants";

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;

  // Actions
  loginStart: () => void;
  loginSuccess: (user: User, token: string) => void;
  loginFailure: (error: string) => void;
  logoutSuccess: () => void;
  registerStart: () => void;
  registerSuccess: (user: User, token: string) => void;
  registerFailure: (error: string) => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem(TOKEN_STORAGE_KEY),
  loading: false,
  error: null,

  loginStart: () => set(() => ({ loading: true, error: null })),

  loginSuccess: (user, token) => {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
    set(() => ({
      user,
      token,
      loading: false,
      error: null,
    }));
  },

  loginFailure: (error) => set(() => ({ loading: false, error })),

  logoutSuccess: () => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    set(() => ({
      user: null,
      token: null,
      loading: false,
    }));
  },

  registerStart: () => set(() => ({ loading: true, error: null })),

  registerSuccess: (user, token) => {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
    set(() => ({
      user,
      token,
      loading: false,
      error: null,
    }));
  },

  registerFailure: (error) => set(() => ({ loading: false, error })),

  clearError: () => set(() => ({ error: null })),
}));
