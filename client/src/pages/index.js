import LoginPage from "./login/index";
import Dashboard from "./dashboard/index";
import AccountPage from "./account/index";
import SignupPage from "./signup";
import { Route, Routes } from "react-router-dom";
import routes from "../routes";

function Pages() {
  return (
    <Routes>
      <Route
        exact
        path={routes.login.path}
        element={<LoginPage></LoginPage>}
      ></Route>

      <Route
        exact
        path={routes.dashboard.path}
        element={<Dashboard></Dashboard>}
      ></Route>

      <Route exact path={routes.account.path} element={<AccountPage />} />

      <Route
        exact
        path={`${routes.signup.path}/*`}
        element={<SignupPage />}
      ></Route>
    </Routes>
  );
}

export { Pages, Dashboard, AccountPage, SignupPage, LoginPage };
