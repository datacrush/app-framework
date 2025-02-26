import { lazy } from "react";

import { Navigate } from "react-router";
import { Http404 } from "../components/error/Http404";
import { userLoader } from "../context/user-loader";
import { PublicLayout } from "../public/Layout";
import { SecureLayout } from "../secure/Layout";
import ProtectedRoute from "../shared/ProtectedRoute";
import { PATHS } from "../types";

const Home = lazy(() => import("../components/home/Home"));
const Login = lazy(() => import("../components/login/Login"));

export default [
  {
    element: <PublicLayout />,
    children: [{ path: PATHS.ROOT, element: <Login /> }],
  },
  {
    path: PATHS.SECURE,
    element: <ProtectedRoute />,
    loader: userLoader,
    hydrateFallbackElement: <div>Checking authorization...</div>,
    children: [
      {
        element: <SecureLayout />,
        children: [
          { path: `${PATHS.HOME}/*`, element: <Home /> },
          { index: true, element: <Navigate to={PATHS.HOME} replace /> },
          { path: "*", element: <Http404 /> },
        ],
      },
    ],
  },
];
