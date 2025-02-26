import { useRevalidator } from "react-router";

import { useUser } from "../../context/user";
import { logout } from "../../services/auth";
import { useLoading } from "../../shared/use-loading";

export const User: React.FC = () => {
  const { state } = useUser();
  const { revalidate } = useRevalidator();

  const [handleLogout, loading] = useLoading(async () => {
    await logout();
    revalidate();
  });

  return (
    <div>
      {state.user?.name}{" "}
      <button onClick={handleLogout} disabled={loading}>
        {loading ? "Logging out..." : "Log out"}
      </button>
    </div>
  );
};

export default User;
