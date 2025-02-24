import { createBrowserRouter, RouterProvider } from "react-router";

import "./App.css";
import { UserProvider } from "./context/UserProvider";
import { AppRouter } from "./routes";

const router = createBrowserRouter(AppRouter);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
