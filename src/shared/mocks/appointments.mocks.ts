import { DoctorAppointment } from "../../types/doctor.types";

export const doctorAppointments: DoctorAppointment[] = [
  {
    id: "1",
    date: "July 30, 2022",
    time: "08:30 am - 10:30 am",
    type: "Nurse Visit 20",
    patientName: "Dr. Carol D. Pollock-Funlie",
    status: "scheduled",
  },
  {
    id: "2",
    date: "July 30, 2022",
    time: "08:30 am - 10:30 am",
    type: "Annual Visit 15",
    patientName: "Dr. Donald F. Warren",
    status: "scheduled",
  },
  {
    id: "3",
    date: "July 31, 2022",
    time: "09:00 am - 10:00 am",
    type: "Regular Checkup",
    patientName: "John Smith",
    status: "scheduled",
  },
  {
    id: "4",
    date: "August 01, 2022",
    time: "11:30 am - 12:30 pm",
    type: "Consultation",
    patientName: "Maria Garcia",
    status: "scheduled",
  },
  {
    id: "5",
    date: "August 02, 2022",
    time: "02:00 pm - 03:00 pm",
    type: "Follow-up",
    patientName: "Robert Johnson",
    status: "scheduled",
  },
];
