import React from "react";
import { Config } from "../../types";

// import { isValidElementType } from "react-is";
// Explore using this for any html element: isValidElementType(elementName)
// this would allow all html elements to be rendered instead of just a div

// type Config = Record<string, Record<string, any>>;

interface PageProps {
  config: Config;
}

export const Page: React.FC<PageProps> = ({ config }) => {
  return React.createElement(...config);
};
