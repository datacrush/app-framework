import { useRevalidator } from "react-router";

import { useUser } from "../../context/user";
import { logout } from "../../services/auth";

export const User: React.FC = () => {
  const { state } = useUser();
  const { revalidate } = useRevalidator();

  const handleLogout = async () => {
    await logout();

    revalidate();
  };

  return (
    <div>
      {state.user?.name} <button onClick={handleLogout}>Log out</button>
    </div>
  );
};
