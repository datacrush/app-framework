import React from "react";

// import { isValidElementType } from "react-is";
// Explore using this for any html element: isValidElementType(elementName)
// this would allow all html elements to be rendered instead of just a div

// type Config = Record<string, Record<string, any>>;

type Config = {
  name: string;
  props: Record<string, any>;
  children?: React.ReactNode | React.ReactNode[];
};

export const Page: React.FC<Config> = (config) => {
  return React.createElement(config.name, config.props, config?.children);
};
