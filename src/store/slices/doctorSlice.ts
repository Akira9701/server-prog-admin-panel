import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DoctorState } from "../../types/doctor.types";
import { Doctor } from "../../types/user.types";
import { doctors as doctorsMock } from "../../shared/mocks/doctors.mocks";

const initialState: DoctorState = {
  doctors: doctorsMock,
  selectedDoctor: null,
  loading: false,
  error: null,
};

export const doctorSlice = createSlice({
  name: "doctors",
  initialState,
  reducers: {
    setDoctors: (state, action: PayloadAction<Doctor[]>) => {
      state.doctors = action.payload;
      state.loading = false;
      state.error = null;
    },
    setSelectedDoctor: (state, action: PayloadAction<Doctor | null>) => {
      state.selectedDoctor = action.payload;
    },
    fetchDoctorsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDoctorsSuccess: (state, action: PayloadAction<Doctor[]>) => {
      state.doctors = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchDoctorsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchDoctorByIdStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchDoctorByIdSuccess: (state, action: PayloadAction<Doctor>) => {
      state.selectedDoctor = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchDoctorByIdFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setDoctors,
  setSelectedDoctor,
  fetchDoctorsStart,
  fetchDoctorsSuccess,
  fetchDoctorsFailure,
  fetchDoctorByIdStart,
  fetchDoctorByIdSuccess,
  fetchDoctorByIdFailure,
} = doctorSlice.actions;

export default doctorSlice.reducer;
