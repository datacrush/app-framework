import { Link } from "react-router";
import React, { lazy } from "react";

export const map: Record<string, React.FC<any>> = {
  home: lazy(() => import("../components/home/Home")),
  login: lazy(() => import("../components/login/Login")),
  link: Link,
  page: lazy(() => import("../components/page/Page")),
};
