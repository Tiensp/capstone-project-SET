import LoginPage from "./login/index";
import Dashboard from "./dashboard/index";
import AccountPage from "./account/index";
import SignupPage from "./signup";
import { Route, Routes } from "react-router-dom";
import routes from "../routes";

function Pages() {
  return (
    <Routes>
      <Route path={routes.login.path} element={<LoginPage></LoginPage>}></Route>

      <Route
        path={routes.dashboard.path + "/*"}
        element={<Dashboard></Dashboard>}
      ></Route>

      <Route path={`${routes.signup.path}/*`} element={<SignupPage />}></Route>
      <Route path={routes.account.path} element={<AccountPage />} />
    </Routes>
  );
}

export { Pages, Dashboard, AccountPage, SignupPage, LoginPage };
