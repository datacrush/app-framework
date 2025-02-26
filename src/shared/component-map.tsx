import { Link, Route, Routes } from "react-router";
import React, { lazy } from "react";

export const map: Record<string, React.FC<any>> = {
  home: lazy(() => import("../components/home/Home")),
  link: Link,
  login: lazy(() => import("../components/login/Login")),
  page: lazy(() => import("../components/page/Page")),
  route: Route,
  routes: Routes,
};
