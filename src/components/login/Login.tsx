import { useNavigate } from "react-router";
import { login } from "../../services/auth";
import { useLoading } from "../../shared/use-loading";
import { PATHS } from "../../types";

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const [handleLogin, loading] = useLoading(async () => {
    const response = await login();

    if (response?.ok) {
      navigate(PATHS.SECURE);
    }
  });

  return (
    <div>
      <h1>Welcome to TBD</h1>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Log in"}
      </button>
    </div>
  );
};
