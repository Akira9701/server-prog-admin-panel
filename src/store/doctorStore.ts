import { create } from "zustand";
import { Doctor } from "@/types/user.types";
import { doctors as doctorsMock } from "@/shared/mocks/doctors.mocks";

interface DoctorState {
  doctors: Doctor[];
  selectedDoctor: Doctor | null;
  loading: boolean;
  error: string | null;
}

export const useDoctorStore = create<DoctorState>(() => ({
  doctors: doctorsMock,
  selectedDoctor: null,
  loading: false,
  error: null,
}));

// Selectors
export const selectDoctors = (state: DoctorState) => state.doctors;
export const selectSelectedDoctor = (state: DoctorState) =>
  state.selectedDoctor;
export const selectIsLoading = (state: DoctorState) => state.loading;
export const selectError = (state: DoctorState) => state.error;

// Actions
export const setDoctors = (doctors: Doctor[]) =>
  useDoctorStore.setState({
    doctors,
    loading: false,
    error: null,
  });

export const setSelectedDoctor = (doctor: Doctor | null) =>
  useDoctorStore.setState({
    selectedDoctor: doctor,
  });

export const fetchDoctorsStart = () =>
  useDoctorStore.setState({
    loading: true,
    error: null,
  });

export const fetchDoctorsSuccess = (doctors: Doctor[]) =>
  useDoctorStore.setState({
    doctors,
    loading: false,
    error: null,
  });

export const fetchDoctorsFailure = (error: string) =>
  useDoctorStore.setState({
    loading: false,
    error,
  });

export const fetchDoctorByIdStart = () =>
  useDoctorStore.setState({
    loading: true,
    error: null,
  });

export const fetchDoctorByIdSuccess = (doctor: Doctor) =>
  useDoctorStore.setState({
    selectedDoctor: doctor,
    loading: false,
    error: null,
  });

export const fetchDoctorByIdFailure = (error: string) =>
  useDoctorStore.setState({
    loading: false,
    error,
  });
