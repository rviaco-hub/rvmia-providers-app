import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";
import { JSX } from "react";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}