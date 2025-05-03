import { create } from "zustand";
import { Doctor, Clinic } from "@/types/user.types";

interface UserState {
  currentUser: Doctor | Clinic | null;
  loading: boolean;
  error: string | null;
}

// Initial state
export const useUserStore = create<UserState>(() => ({
  currentUser: null,
  loading: false,
  error: null,
}));

// Selectors
export const selectCurrentUser = (state: UserState) => state.currentUser;
export const selectIsLoading = (state: UserState) => state.loading;
export const selectError = (state: UserState) => state.error;

// Actions
export const setCurrentUser = (user: Doctor | Clinic | null) =>
  useUserStore.setState({
    currentUser: user,
    loading: false,
    error: null,
  });

export const fetchCurrentUserStart = () =>
  useUserStore.setState({
    loading: true,
    error: null,
  });

export const fetchCurrentUserSuccess = (user: Doctor | Clinic) =>
  useUserStore.setState({
    currentUser: user,
    loading: false,
    error: null,
  });

export const fetchCurrentUserFailure = (error: string) =>
  useUserStore.setState({
    loading: false,
    error,
  });

export const logout = () =>
  useUserStore.setState({
    currentUser: null,
    loading: false,
    error: null,
  });
