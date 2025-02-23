import { Route, Routes } from "react-router";

import "./App.css";
import { Home } from "./components/home/Home";
import { Login } from "./components/login/Login";
import { UserProvider } from "./context/UserProvider";
import { PublicLayout } from "./public/Layout";
import { SecureLayout } from "./secure/Layout";
import ProtectedRoute from "./shared/ProtectedRoute";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route element={<SecureLayout />}>
            <Route path="/home" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
