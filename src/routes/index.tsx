import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorPage from "@/pages/Error";
import Home from "@/pages/Home";

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
    ],
  },
]);

export default router;
