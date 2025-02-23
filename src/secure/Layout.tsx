import { Outlet } from "react-router";

export const SecureLayout = () => {
  return (
    <div>
      <h1>Secure Layout</h1>
      <Outlet />
    </div>
  );
};
