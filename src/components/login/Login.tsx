import { useNavigate, useSearchParams } from "react-router";

import { login } from "../../services/auth";
import { useLoading } from "../../shared/use-loading";
import { PATHS } from "../../types";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("resume") || PATHS.SECURE;

  const [handleLogin, loading] = useLoading(async () => {
    const response = await login();

    if (response?.ok) {
      navigate(redirectTo);
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
