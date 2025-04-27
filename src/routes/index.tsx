import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorPage from "@/pages/Error";
import Home from "@/pages/Home";

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
      // Add more routes here as needed
    ],
  },
]);

export default router;
