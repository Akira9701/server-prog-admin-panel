// Pet types based on swagger.yaml
import { VetShort } from "./vet.types";

export type PetType = "DOG" | "CAT" | "BIRD" | "RODENT" | "REPTILE" | "OTHER";

export interface PetShort {
  id: string;
  name: string;
  type: PetType;
}

export interface PetUpdate {
  name: string;
  type?: PetType;
  breed?: string;
  birthDate?: string;
  chipNumber?: string;
}

export interface PetRegistration {
  name: string;
  type: PetType;
  breed?: string;
  birthDate?: string;
  chipNumber?: string;
}

export interface MedicalRecord {
  id: string;
  diagnosis: string;
  treatment: string;
  notes?: string;
  date: string;
  vet: VetShort;
}

export interface Pet {
  id: string;
  name: string;
  type: PetType;
  breed?: string;
  birthDate?: string;
  chipNumber?: string;
  medicalRecords: MedicalRecord[];
}
