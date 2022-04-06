import React, {useEffect} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AccountConsumer, AccountProvider } from "../../stores/account";
import routes from "../../routes";
import { LoginPage } from "../../pages";
import WebFont from 'webfontloader';
import { getMe } from "../../utils";
import Dashboard from "../../pages/dashboard";

export default function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Merriweather", "Poppins"]
      }
    });
   }, []);
  
  return (
    <Router>
      <AccountProvider>
        <AccountConsumer>
          {(context) => {
            if (
              window.sessionStorage.getItem("token") ||
              window.localStorage.getItem("token")
            ) {
              const token =
                window.sessionStorage.getItem("token") ||
                window.localStorage.getItem("token");
              if (!context.account) {
                getMe(context, token);
              }
              return <Dashboard/>
            } else {
              if (window.location.pathname !== routes.login.path) {
                window.location.href = routes.login.path;
              }
              return <LoginPage />;
            }
          }}
        </AccountConsumer>
      </AccountProvider>
    </Router>
  );
}
