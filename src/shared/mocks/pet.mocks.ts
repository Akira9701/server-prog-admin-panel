import { Pet, MedicalRecord } from "@/types/pet.types";

const medicRecords: MedicalRecord[] = [
  {
    id: "record-1",
    diagnosis: "Перелом передней правой лапы",
    treatment: "Наложение гипса, обезболивающие",
    notes: "Рекомендован покой в течение 3 недель",
    date: "2023-06-15",
    vet: {
      id: "vet-1",
      firstName: "Иван",
      lastName: "Петров",
      specialization: "Хирург",
      avatarUrl: "https://example.com/avatar1.jpg",
    },
  },
  {
    id: "record-2",
    diagnosis: "Ушная инфекция",
    treatment: "Антибиотики, ушные капли",
    notes: "Повторный осмотр через 10 дней",
    date: "2023-07-20",
    vet: {
      id: "vet-2",
      firstName: "Анна",
      lastName: "Смирнова",
      specialization: "Терапевт",
      avatarUrl: "https://example.com/avatar2.jpg",
    },
  },
];

export const petMocks: Pet[] = [
  {
    id: "pet-1",
    name: "Барсик",
    type: "CAT",
    breed: "Сибирская",
    birthDate: "2020-05-12",
    chipNumber: "CHIP123456",
    medicalRecords: medicRecords,
  },
  {
    id: "pet-2",
    name: "Шарик",
    type: "DOG",
    breed: "Лабрадор",
    birthDate: "2019-03-24",
    chipNumber: "CHIP654321",
    medicalRecords: [],
  },
  {
    id: "pet-3",
    name: "Кеша",
    type: "BIRD",
    breed: "Волнистый попугай",
    birthDate: "2021-09-05",
    chipNumber: undefined,
    medicalRecords: [],
  },
];
