import { Navigate, Outlet } from "react-router";
import { useUser } from "../context/user";

function ProtectedRoute() {
  const { state } = useUser();

  return state.user?.name ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectedRoute;
