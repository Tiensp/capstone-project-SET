import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AccountConsumer, AccountProvider } from "../../stores/account";
import routes from "../../routes";
import { LoginPage } from "../../pages";

export default function App() {
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
                const config = {
                  headers: {
                    authorization: token,
                  },
                };
              }
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
