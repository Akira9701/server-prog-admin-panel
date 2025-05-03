import { Address, VetShort } from "./vet.types";

export interface ClinicRegistration {
  name: string;
  description: string;
  phone: string;
  email: string;
  address: Address;
  licenseNumber: string;
  workingHours?: string[];
  password?: string; // Added for auth
}

export interface Clinic {
  id: string;
  name: string;
  description: string;
  phone: string;
  email: string;
  city: string;
  street: string;
  building: string;
  postalCode?: string;
  services: string[];
  logoUrl: string;
  workingHours: string[];
  vets: VetShort[];
  password?: string; // Added for auth
  role?: string; // Added for auth
  createdAt?: string; // Added for storage
  updatedAt?: string; // Added for storage
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
