import { useNavigate } from "react-router";
import { login } from "../../services/auth";

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await login();

    if (response?.ok) {
      navigate("/home");
    }
  };

  return (
    <div>
      <h1>Welcome to TBD</h1>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};
