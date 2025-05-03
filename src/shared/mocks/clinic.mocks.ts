import { Clinic } from "@/types/clinic.types";
import { VetShort } from "@/types/vet.types";

const vetShortList: VetShort[] = [
  {
    id: "vet-2",
    firstName: "Анна",
    lastName: "Смирнова",
    specialization: "Терапевт",
    avatarUrl: "https://example.com/avatar2.jpg",
  },
  {
    id: "vet-3",
    firstName: "Сергей",
    lastName: "Иванов",
    specialization: "Дерматолог",
    avatarUrl: "https://example.com/avatar3.jpg",
  },
];

export const clinicMocks: Clinic[] = [
  {
    id: "clinic-1",
    name: "Test Clinic Account",
    description: "Тестовая ветеринарная клиника с полным спектром услуг",
    email: "clinic@mail.ru",
    phone: "+7 (999) 123-4567",
    city: "Москва",
    street: "Пушкина",
    building: "10",
    postalCode: "123456",
    services: ["Стационар", "Лаборатория", "Рентген", "УЗИ"],
    logoUrl: "https://example.com/logo1.png",
    workingHours: ["Пн-Пт: 9:00-18:00", "Сб: 10:00-15:00"],
    vets: vetShortList,
    password: "clinic",
    role: "clinic",
    createdAt: "2023-01-01T00:00:00.000Z",
    updatedAt: "2023-06-01T00:00:00.000Z",
  },
  {
    id: "clinic-2",
    name: "Ветклиника №2",
    description: "Современная ветеринарная клиника для домашних животных",
    email: "info@vet2.com",
    phone: "+7 (999) 765-4321",
    city: "Санкт-Петербург",
    street: "Невский проспект",
    building: "20",
    postalCode: "198000",
    services: ["Хирургия", "Терапия", "Вакцинация", "Стрижка"],
    logoUrl: "https://example.com/logo2.png",
    workingHours: ["Пн-Вс: 10:00-20:00"],
    vets: [vetShortList[1]],
    password: "password456",
    role: "clinic",
    createdAt: "2022-12-15T00:00:00.000Z",
    updatedAt: "2023-05-20T00:00:00.000Z",
  },
];
