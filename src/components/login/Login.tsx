import { useNavigate } from "react-router";
import { login } from "../../services/auth";
import { useUser } from "../../context/user";

export const Login: React.FC = () => {
  const { dispatch } = useUser();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const user = await login();

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
      navigate("/home");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};
