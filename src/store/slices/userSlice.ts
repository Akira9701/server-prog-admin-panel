import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  Doctor, Clinic } from "../../types/user.types";

interface UserState {
  currentUser: Doctor | Clinic | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  currentUser: {
    id: "1",
    firstName: "Dr.",
    lastName: "Anmangandla",
    email: "dilip.anmangandla@example.com",
    password: "password123",
    role: "doctor",
    avatarUrl: "#3b82f6",
    createdAt: "2020-01-01T00:00:00.000Z",
    specialization: "Cardiology",
    qualification: "10 years",
    rating: 4.8,
    totalPatients: 100,
    totalAppointments: 50,
    bio: "Dr. Dilip Anmangandla is a cardiologist with a passion for helping patients achieve optimal heart health. With over 10 years of experience, he has a deep understanding of the latest medical advancements in cardiology.",
  },
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<Doctor | Clinic | null>) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchCurrentUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCurrentUserSuccess: (state, action: PayloadAction<Doctor | Clinic>) => {
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
