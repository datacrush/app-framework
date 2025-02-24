import { Home } from "../components/home/Home";
import { Login } from "../components/login/Login";
import { userLoader } from "../context/user-loader";
import { PublicLayout } from "../public/Layout";
import { SecureLayout } from "../secure/Layout";
import ProtectedRoute from "../shared/ProtectedRoute";

enum PATHS {
  HOME = "/home",
  ROOT = "/",
}

export default [
  {
    element: <PublicLayout />,
    children: [{ path: PATHS.ROOT, element: <Login /> }],
  },
  {
    element: <ProtectedRoute />,
    loader: userLoader,
    hydrateFallbackElement: <div>Checking authorization...</div>,
    children: [
      {
        element: <SecureLayout />,
        children: [{ path: PATHS.HOME, element: <Home /> }],
      },
    ],
  },
];
