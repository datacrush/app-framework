import { useEffect } from "react";
import { Outlet, useLoaderData } from "react-router";
import { useUser } from "../context/user";

function ProtectedRoute() {
  const user = useLoaderData();
  const { state, dispatch } = useUser();

  useEffect(() => {
    if (!state.user && user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, [state.user, user, dispatch]);

  return <Outlet />;
}

export default ProtectedRoute;
