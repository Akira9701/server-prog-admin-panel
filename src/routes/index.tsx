import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorPage from "@/pages/Error";
import Home from "@/pages/Home";
import Doctors from "@/pages/Doctors";
import Register from "@/pages/Register";
import Auth from "@/pages/Auth";
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
    ],
  },
]);

export default router;
