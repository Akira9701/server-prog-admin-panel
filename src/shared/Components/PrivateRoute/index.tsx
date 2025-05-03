import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore, selectIsAuthenticated } from "@/store/authStore";
import { AUTH_ROUTE } from "@/shared/constants/auth.constants";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuthenticated = useAuthStore(selectIsAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to auth page with the return url
    return (
      <Navigate to={AUTH_ROUTE} state={{ from: location.pathname }} replace />
    );
  }

  return <>{children}</>;
};

export default PrivateRoute;
