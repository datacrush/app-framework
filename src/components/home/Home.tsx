import { Page } from "../page/Page";

export const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <Page
        name="div"
        props={{ className: "cheesy-blink" }}
        children={"welcome"}
      />
    </div>
  );
};
