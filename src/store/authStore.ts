import { create } from "zustand";
import { User } from "@/types/user.types";
import { TOKEN_STORAGE_KEY } from "@/shared/constants/auth.constants";

interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

export const useAuthStore = create<AuthState>(() => ({
  user: null,
  token: localStorage.getItem(TOKEN_STORAGE_KEY),
  loading: false,
  error: null,
}));

// Selectors
export const selectUser = (state: AuthState) => state.user;
export const selectToken = (state: AuthState) => state.token;
export const selectIsLoading = (state: AuthState) => state.loading;
export const selectError = (state: AuthState) => state.error;
export const selectIsAuthenticated = (state: AuthState) =>
  !!state.token && !!state.user;

// Actions
export const loginStart = () =>
  useAuthStore.setState({ loading: true, error: null });

export const loginSuccess = (user: User, token: string) => {
  localStorage.setItem(TOKEN_STORAGE_KEY, token);
  useAuthStore.setState({
    user,
    token,
    loading: false,
    error: null,
  });
};

export const loginFailure = (error: string) =>
  useAuthStore.setState({ loading: false, error });

export const logoutSuccess = () => {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
  useAuthStore.setState({
    user: null,
    token: null,
    loading: false,
    error: null,
  });
};

export const registerStart = () =>
  useAuthStore.setState({ loading: true, error: null });

export const registerSuccess = (user: User, token: string) => {
  localStorage.setItem(TOKEN_STORAGE_KEY, token);
  useAuthStore.setState({
    user,
    token,
    loading: false,
    error: null,
  });
};

export const registerFailure = (error: string) =>
  useAuthStore.setState({ loading: false, error });

export const clearError = () => useAuthStore.setState({ error: null });
