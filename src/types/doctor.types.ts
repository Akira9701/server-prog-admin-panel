import { Doctor } from "./user.types";

export interface DoctorState {
  doctors: Doctor[];
  selectedDoctor: Doctor | null;
  loading: boolean;
  error: string | null;
}

export interface DoctorStatistics {
  totalAppointments: number;
  totalPatients: number;
  rating: number;
  satisfaction: {
    excellent: number;
    good: number;
    poor: number;
    total: number;
  };
}

export interface DoctorAppointment {
  id: string;
  date: string;
  time: string;
  type: string;
  patientName: string;
  status: "scheduled" | "completed" | "cancelled";
}

export interface DoctorProfile {
  doctor: Doctor;
  statistics: DoctorStatistics;
  upcomingAppointments: DoctorAppointment[];
}
