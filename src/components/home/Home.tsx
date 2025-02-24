import { Config } from "../../types";
import { Page } from "../page/Page";

const welcome: Config = [
  "div",
  { className: "cheesy-blink-gradient" },
  "Welcome!",
];

export const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>

      <Page config={welcome} />
    </div>
  );
};
