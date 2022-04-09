import React from "react";
import Login from "../../components/login";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "../../routes";
import Signup from "../../components/signup";

export default function LoginPage() {
  return (
    <React.StrictMode>
      <Routes>
				<Route path={routes.home.path} element={<Navigate to={routes.login.path}></Navigate>}></Route>

        <Route
          path={routes.dashboard.path}
          element={<Navigate to={routes.login.path}></Navigate>}
        />
        <Route path={routes.login.path + "/*"} element={<Login></Login>} />
        <Route path={routes.signup.path} element={<Signup></Signup>} />
      </Routes>
    </React.StrictMode>
  );
}
