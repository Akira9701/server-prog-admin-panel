import { create } from "zustand";
import { Doctor } from "@/types/user.types";
import { doctors as doctorsMock } from "@/shared/mocks/doctors.mocks";

interface DoctorState {
  doctors: Doctor[];
  selectedDoctor: Doctor | null;
  loading: boolean;
  error: string | null;

  // Actions
  setDoctors: (doctors: Doctor[]) => void;
  setSelectedDoctor: (doctor: Doctor | null) => void;
  fetchDoctorsStart: () => void;
  fetchDoctorsSuccess: (doctors: Doctor[]) => void;
  fetchDoctorsFailure: (error: string) => void;
  fetchDoctorByIdStart: () => void;
  fetchDoctorByIdSuccess: (doctor: Doctor) => void;
  fetchDoctorByIdFailure: (error: string) => void;
}

export const useDoctorStore = create<DoctorState>((set) => ({
  doctors: doctorsMock,
  selectedDoctor: null,
  loading: false,
  error: null,

  setDoctors: (doctors) =>
    set(() => ({
      doctors,
      loading: false,
      error: null,
    })),

  setSelectedDoctor: (doctor) =>
    set(() => ({
      selectedDoctor: doctor,
    })),

  fetchDoctorsStart: () =>
    set(() => ({
      loading: true,
      error: null,
    })),

  fetchDoctorsSuccess: (doctors) =>
    set(() => ({
      doctors,
      loading: false,
      error: null,
    })),

  fetchDoctorsFailure: (error) =>
    set(() => ({
      loading: false,
      error,
    })),

  fetchDoctorByIdStart: () =>
    set(() => ({
      loading: true,
      error: null,
    })),

  fetchDoctorByIdSuccess: (doctor) =>
    set(() => ({
      selectedDoctor: doctor,
      loading: false,
      error: null,
    })),

  fetchDoctorByIdFailure: (error) =>
    set(() => ({
      loading: false,
      error,
    })),
}));
