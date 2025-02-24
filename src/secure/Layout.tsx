import { Outlet } from "react-router";
import { User } from "../components/user/User";

export const SecureLayout = () => {
  return (
    <div>
      <User />
      <Outlet />
    </div>
  );
};
