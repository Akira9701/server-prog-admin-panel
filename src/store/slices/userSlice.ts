import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/user.types";

interface UserState {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  currentUser: {
    id: "1",
    name: "Eleanor Pena",
    email: "eleanor.pena@example.com",
    role: "doctor",
    avatar: "#3b82f6",
    createdAt: "2020-01-01T00:00:00.000Z",
    updatedAt: "2023-06-01T00:00:00.000Z",
  },
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchCurrentUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCurrentUserSuccess: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchCurrentUserFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  setCurrentUser,
  fetchCurrentUserStart,
  fetchCurrentUserSuccess,
  fetchCurrentUserFailure,
  logout,
} = userSlice.actions;

export default userSlice.reducer;
