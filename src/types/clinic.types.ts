import { Clinic } from "./user.types";

export interface ClinicState {
  clinics: Clinic[];
  selectedClinic: Clinic | null;
  loading: boolean;
  error: string | null;
}


export interface ClinicStatistics {
    totalAppointments: number;
    totalDoctors: number;
    totalPatients: number;
    appointmentsBySpecialty: {
      specialty: string;
      count: number;
    }[];
    appointmentsByStatus: {
      status: string;
      count: number;
    }[];
  } 

export interface ClinicAppointment {
  id: string;
  date: string;
  time: string;
  type: string;
  doctorName: string;
  patientName: string;
  status: "scheduled" | "completed" | "cancelled";
}

export interface ClinicProfile {
    id: string;
    name: string;
    email: string;
    address: string;
    phone: string;
    workingHours: string;
    description: string;
    specialties: string[];
    totalDoctors: number;
    totalPatients: number;
    totalAppointments: number;
    rating: number;
    reviews: {
      id: string;
      patientName: string;
      rating: number;
      comment: string;
      date: string;
    }[];
  }
  