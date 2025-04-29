export interface User {
  id: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  password: string;
  role: "doctor" | "clinic"; //хз нужно ли
  createdAt: string;
}

export interface Doctor extends User {
  firstName: string;
  lastName: string;
  role: "doctor";
  specialization: string;
  qualification: string;
  bio: string;
  avatarUrl?: string;
  rating: number;
  totalPatients: number;
  totalAppointments: number;
}

export interface Clinic extends User {
  name: string;
  role: "clinic";
  description: string;
  phone: string;
  address: string;
  logoUrl: string;
  workingHours: string;
  updatedAt: string;
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


