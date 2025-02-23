import { useNavigate } from "react-router";

export const Home: React.FC = () => {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => navigate("/")}>Log out</button>
    </div>
  );
};
