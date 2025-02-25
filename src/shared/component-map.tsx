import { Link } from "react-router";
import React, { lazy } from "react";

const Home = lazy(() => import("../components/home/Home"));
const Page = lazy(() => import("../components/page/Page"));
const Login = lazy(() => import("../components/login/Login"));

export const map: Record<string, React.FC<any>> = {
  home: Home,
  login: Login,
  link: Link,
  page: Page,
};
