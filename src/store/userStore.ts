import { create } from "zustand";
import { Doctor, Clinic } from "@/types/user.types";

interface UserState {
  currentUser: Doctor | Clinic | null;
  loading: boolean;
  error: string | null;

  // Actions
  setCurrentUser: (user: Doctor | Clinic | null) => void;
  fetchCurrentUserStart: () => void;
  fetchCurrentUserSuccess: (user: Doctor | Clinic) => void;
  fetchCurrentUserFailure: (error: string) => void;
  logout: () => void;
}

// Default initial user - for demonstration purposes
const defaultUser: Doctor = {
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
};

export const useUserStore = create<UserState>((set) => ({
  currentUser: defaultUser,
  loading: false,
  error: null,

  setCurrentUser: (user) =>
    set(() => ({
      currentUser: user,
      loading: false,
      error: null,
    })),

  fetchCurrentUserStart: () =>
    set(() => ({
      loading: true,
      error: null,
    })),

  fetchCurrentUserSuccess: (user) =>
    set(() => ({
      currentUser: user,
      loading: false,
      error: null,
    })),

  fetchCurrentUserFailure: (error) =>
    set(() => ({
      loading: false,
      error,
    })),

  logout: () =>
    set(() => ({
      currentUser: null,
      loading: false,
      error: null,
    })),
}));
