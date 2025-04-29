import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClinicState } from "../../types/clinic.types";
import { Clinic } from "../../types/user.types";
import { clinics } from "../../shared/mocks/clinic.mocks";

const initialState: ClinicState = {
  clinics: clinics,
  selectedClinic: null,
  loading: false,
  error: null,
};

export const clinicSlice = createSlice({
  name: "clinics",
  initialState,
  reducers: {
    setClinics: (state, action: PayloadAction<Clinic[]>) => {
      state.clinics = action.payload;
      state.loading = false;
      state.error = null;
    },
    setSelectedClinic: (state, action: PayloadAction<Clinic | null>) => {
      state.selectedClinic = action.payload;
    },
    fetchClinicsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchClinicsSuccess: (state, action: PayloadAction<Clinic[]>) => {
      state.clinics = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchClinicsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchClinicByIdStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchClinicByIdSuccess: (state, action: PayloadAction<Clinic>) => {
      state.selectedClinic = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchClinicByIdFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setClinics,
  setSelectedClinic,
  fetchClinicsStart,
  fetchClinicsSuccess,
  fetchClinicsFailure,
  fetchClinicByIdStart,
  fetchClinicByIdSuccess,
  fetchClinicByIdFailure,
} = clinicSlice.actions;

export default clinicSlice.reducer; 