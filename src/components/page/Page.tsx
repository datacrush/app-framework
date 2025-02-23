import React from "react";
import { useLoaderData } from "react-router";

// import { isValidElementType } from "react-is";
// Explore using this for any html element: isValidElementType(elementName)
// this would allow all html elements to be rendered instead of just a div

type Config = Record<string, Record<string, any>>;

interface PageProps {
  componentLoader: (
    name: string,
    props: Record<string, any>
  ) => React.ReactElement | null;
}

export const Page: React.FC<PageProps> = ({ componentLoader }) => {
  const config = useLoaderData() as Config;

  const renderElement = (elementName: string, props: Record<string, any>) => {
    if (elementName === "div") {
      return (
        <div {...props}>{props.children && renderConfig(props.children)}</div>
      );
    }
    return componentLoader(elementName, props);
  };

  const renderConfig = (config: Config) =>
    Object.entries(config).map(([elementName, props], index) =>
      React.createElement(() => renderElement(elementName, props), {
        key: index,
      })
    );

  return <>{renderConfig(config)}</>;
};
