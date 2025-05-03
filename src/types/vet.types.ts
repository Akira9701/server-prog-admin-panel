// Vet types based on swagger.yaml

export interface Address {
  city: string;
  street: string;
  building: string;
  postalCode?: string;
}

export interface ClinicShort {
  id: string;
  name: string;
  logoUrl: string;
}

export interface Vet {
  id: string;
  firstName: string;
  lastName: string;
  specialization: string;
  qualification: string;
  bio: string;
  email: string;
  password?: string; // Added for auth
  avatarUrl: string;
  clinic: ClinicShort | null;
  services: string[];
  address: Address | null;
  role?: string; // Added for auth
  createdAt?: string; // Added for storage
}

export interface VetShort {
  id: string;
  firstName: string;
  lastName: string;
  specialization: string;
  avatarUrl?: string;
}

export interface VetUpdate {
  firstName?: string;
  lastName?: string;
  specialization?: string;
  qualification?: string;
  bio?: string;
  services?: string[];
  clinicId?: string;
}

export interface VetRegistration {
  firstName: string;
  lastName: string;
  specialization: string;
  qualification?: string;
  bio?: string;
  services?: string[];
  address?: Address;
  email?: string; // Added for registration
  password?: string; // Added for registration
}

export interface AddService {
  serviceName: string;
}

export interface Appointment {
  id: string;
  dateTime: string;
  petName: string;
  ownerName: string;
  status: string;
}
