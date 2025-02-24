import { Home } from "../components/home/Home";
import { Login } from "../components/login/Login";
import { userLoader } from "../context/user-loader";
import { PublicLayout } from "../public/Layout";
import { SecureLayout } from "../secure/Layout";
import ProtectedRoute from "../shared/ProtectedRoute";

export default [
  {
    path: "/",
    element: <PublicLayout />,
    children: [{ path: "/", element: <Login /> }],
  },
  {
    element: <ProtectedRoute />,
    loader: userLoader,
    hydrateFallbackElement: <div>Checking authorization...</div>,
    children: [
      {
        element: <SecureLayout />,
        children: [{ path: "/home", element: <Home /> }],
      },
    ],
  },
];
