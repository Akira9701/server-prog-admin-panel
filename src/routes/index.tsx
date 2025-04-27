import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorPage from "@/pages/Error";
import Home from "@/pages/Home";
import Doctors from "@/pages/Doctors";
// Import dummy page components for navigation examples

const router = createBrowserRouter([
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
