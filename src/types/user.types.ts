export interface User {
  id: string;
  name: string;
  email: string;
  role: "doctor" | "patient" | "admin";
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Doctor extends User {
  role: "doctor";
  specialization: string;
  experience: string;
  profile: string;
  rating: number;
  totalPatients: number;
  totalAppointments: number;
}

export interface Patient extends User {
  role: "patient";
  age?: number;
  gender?: "male" | "female" | "other";
  bloodGroup?: string;
  address?: string;
  phone?: string;
}

export interface Appointment {
  id: string;
  doctorId: string;
  patientId: string;
  date: string;
  startTime: string;
  endTime: string;
  status: "scheduled" | "completed" | "cancelled";
  type: string;
  notes?: string;
}

export interface Review {
  id: string;
  doctorId: string;
  patientId: string;
  patientName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}
