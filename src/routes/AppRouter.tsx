import { Navigate } from "react-router";
import { Home } from "../components/home/Home";
import { Login } from "../components/login/Login";
import { userLoader } from "../context/user-loader";
import { PublicLayout } from "../public/Layout";
import { SecureLayout } from "../secure/Layout";
import ProtectedRoute from "../shared/ProtectedRoute";
import { PATHS } from "../types";
import { Http404 } from "../components/error/Http404";

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
          { path: PATHS.HOME, element: <Home /> },
          { index: true, element: <Navigate to={PATHS.HOME} replace /> },
          { path: "*", element: <Http404 /> },
        ],
      },
    ],
  },
];
