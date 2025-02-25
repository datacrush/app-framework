import React, { JSX, useEffect, useState } from "react";
import { map } from "../../shared/component-map";
import { Config } from "../../types";

// import { isValidElementType } from "react-is";
// Explore using this for any html element: isValidElementType(elementName)
// this would allow all html elements to be rendered instead of just a div

// type Config = Record<string, Record<string, any>>;

interface PageProps {
  url: string;
}

export const Page: React.FC<PageProps> = ({ url }) => {
  const [config, setConfig] = useState<Config | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Failed to load config: ${response.status}`);
        }
        return await response.json();
      })
      .then(setConfig)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!config) return <div>No configuration found</div>;

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {configToElements(config)}
    </React.Suspense>
  );
};

export default Page;

function configToElements(config: Config): JSX.Element {
  const elementType = map[config.name] || config.name;
  return React.createElement(
    elementType,
    config.props,
    config.children?.map((child, index) =>
      typeof child === "string"
        ? child
        : configToElements({ ...child, props: { ...child.props, key: index } })
    )
  );
}
