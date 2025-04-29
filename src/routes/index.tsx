import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorPage from "@/pages/Error";
import Home from "@/pages/Home";
import Doctors from "@/pages/Doctors";
import Register from "@/pages/Register";
import Auth from "@/pages/Auth";
import DoctorProfile from "../pages/DoctorProfile";
import ClinicProfile from "../pages/ClinicProfile";
import Login from "../pages/Login";
// Import dummy page components for navigation examples

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <Auth />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/doctors",
        element: <Doctors />,
      },
      {
        path: "profileDoctor/:id",
        element: <DoctorProfile />,
      },
      {
        path: "profileClinic/:id",
        element: <ClinicProfile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
