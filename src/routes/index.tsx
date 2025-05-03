import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorPage from "@/pages/Error";
import Home from "@/pages/Home";
import Doctors from "@/pages/Doctors";
import Register from "@/pages/Register";
import Auth from "@/pages/Auth";
import DoctorProfile from "../pages/DoctorProfile";
import ClinicProfile from "../pages/ClinicProfile";
import PrivateRoute from "@/shared/components/PrivateRoute";
import { REGISTER_ROUTE, AUTH_ROUTE } from "@/shared/constants/auth.constants";
import { APP_ROUTES } from "@/shared/constants/routes.constants";
// Import dummy page components for navigation examples

const router = createBrowserRouter([
  {
    path: REGISTER_ROUTE,
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: AUTH_ROUTE,
    element: <Auth />,
    errorElement: <ErrorPage />,
  },
  {
    path: APP_ROUTES.HOME,
    element: (
      <PrivateRoute>
        <Root />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: APP_ROUTES.DOCTORS,
        element: <Doctors />,
      },
      {
        path: APP_ROUTES.PROFILE_DOCTOR,
        element: <DoctorProfile />,
      },
      {
        path: APP_ROUTES.PROFILE_CLINIC,
        element: <ClinicProfile />,
      },
    ],
  },
]);

export default router;
