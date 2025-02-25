import { Config } from "../../types";
import { Page } from "../page/Page";

const welcome: Config = {
  name: "div",
  props: { className: "cheesy-blink-gradient" },
  children: [{ name: "p", children: ["Hello world!"] }],
};

export const Home: React.FC = () => {
  return (
    <div>
      <h1>Home</h1>

      <Page config={welcome} />
    </div>
  );
};
