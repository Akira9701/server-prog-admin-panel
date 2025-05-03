import { create } from "zustand";
import { Clinic } from "@/types/clinic.types";
import { clinicMocks } from "@/shared/mocks/clinic.mocks";

interface ClinicState {
  clinics: Clinic[];
  selectedClinic: Clinic | null;
  loading: boolean;
  error: string | null;
}

export const useClinicStore = create<ClinicState>(() => ({
  clinics: clinicMocks,
  selectedClinic: null,
  loading: false,
  error: null,
}));

// Selectors
export const selectClinics = (state: ClinicState) => state.clinics;
export const selectSelectedClinic = (state: ClinicState) =>
  state.selectedClinic;
export const selectIsLoading = (state: ClinicState) => state.loading;
export const selectError = (state: ClinicState) => state.error;

// Actions
export const setClinics = (clinics: Clinic[]) =>
  useClinicStore.setState({
    clinics,
    loading: false,
    error: null,
  });

export const setSelectedClinic = (clinic: Clinic | null) =>
  useClinicStore.setState({
    selectedClinic: clinic,
  });

export const fetchClinicsStart = () =>
  useClinicStore.setState({
    loading: true,
    error: null,
  });

export const fetchClinicsSuccess = (clinics: Clinic[]) =>
  useClinicStore.setState({
    clinics,
    loading: false,
    error: null,
  });

export const fetchClinicsFailure = (error: string) =>
  useClinicStore.setState({
    loading: false,
    error,
  });

export const fetchClinicByIdStart = () =>
  useClinicStore.setState({
    loading: true,
    error: null,
  });

export const fetchClinicByIdSuccess = (clinic: Clinic) =>
  useClinicStore.setState({
    selectedClinic: clinic,
    loading: false,
    error: null,
  });

export const fetchClinicByIdFailure = (error: string) =>
  useClinicStore.setState({
    loading: false,
    error,
  });
