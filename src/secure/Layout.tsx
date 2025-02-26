import { lazy } from "react";
import { Outlet } from "react-router";

const User = lazy(() => import("../components/user/User"));

export const SecureLayout = () => {
  return (
    <div>
      <User />
      <Outlet />
    </div>
  );
};
