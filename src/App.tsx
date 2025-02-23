import { createBrowserRouter, RouterProvider } from "react-router";

import "./App.css";
import { Home } from "./components/home/Home";
import { Login } from "./components/login/Login";
import { userLoader } from "./context/user-loader";
import { UserProvider } from "./context/UserProvider";
import { PublicLayout } from "./public/Layout";
import { SecureLayout } from "./secure/Layout";
import ProtectedRoute from "./shared/ProtectedRoute";

const router = createBrowserRouter([
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
]);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
