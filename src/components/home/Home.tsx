import { lazy } from "react";

const Page = lazy(() => import("../page/Page"));

export const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>

      <Page url={"/api/ui/example"} />
    </div>
  );
};

export default Home;
