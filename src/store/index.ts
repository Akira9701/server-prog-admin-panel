import { configureStore } from "@reduxjs/toolkit";
import doctorReducer from "./slices/doctorSlice";
import userReducer from "./slices/userSlice";
import authReducer from "./slices/authSlice";
import clinicReducer from "./slices/clinicSlice";

export const store = configureStore({
  reducer: {
    doctors: doctorReducer,
    user: userReducer,
    auth: authReducer,
    clinics: clinicReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
