import { create } from "zustand";
import { Clinic } from "@/types/user.types";
import { clinics } from "@/shared/mocks/clinic.mocks";

interface ClinicState {
  clinics: Clinic[];
  selectedClinic: Clinic | null;
  loading: boolean;
  error: string | null;

  // Actions
  setClinics: (clinics: Clinic[]) => void;
  setSelectedClinic: (clinic: Clinic | null) => void;
  fetchClinicsStart: () => void;
  fetchClinicsSuccess: (clinics: Clinic[]) => void;
  fetchClinicsFailure: (error: string) => void;
  fetchClinicByIdStart: () => void;
  fetchClinicByIdSuccess: (clinic: Clinic) => void;
  fetchClinicByIdFailure: (error: string) => void;
}

export const useClinicStore = create<ClinicState>((set) => ({
  clinics: clinics,
  selectedClinic: null,
  loading: false,
  error: null,

  setClinics: (clinics) =>
    set(() => ({
      clinics,
      loading: false,
      error: null,
    })),

  setSelectedClinic: (clinic) =>
    set(() => ({
      selectedClinic: clinic,
    })),

  fetchClinicsStart: () =>
    set(() => ({
      loading: true,
      error: null,
    })),

  fetchClinicsSuccess: (clinics) =>
    set(() => ({
      clinics,
      loading: false,
      error: null,
    })),

  fetchClinicsFailure: (error) =>
    set(() => ({
      loading: false,
      error,
    })),

  fetchClinicByIdStart: () =>
    set(() => ({
      loading: true,
      error: null,
    })),

  fetchClinicByIdSuccess: (clinic) =>
    set(() => ({
      selectedClinic: clinic,
      loading: false,
      error: null,
    })),

  fetchClinicByIdFailure: (error) =>
    set(() => ({
      loading: false,
      error,
    })),
}));
