import React, { useEffect } from "react";
import { AccountConsumer, AccountProvider } from "../../stores/account";
import routes from "../../routes";
import {Pages } from "../../pages";
import WebFont from "webfontloader";
import { getMe } from "../../utils";

export default function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Merriweather", "Poppins"],
      },
    });
  }, []);


  return (
    <div>
      <Pages />
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
              if (window.location.pathname !== routes.dashboard.path) {
                window.location.href = routes.dashboard.path;
             }
            } else {
              if (window.location.pathname !== routes.login.path) {
                 window.location.href = routes.login.path;
              }
            }
          }}
        </AccountConsumer>
      </AccountProvider>
    </div>
  );
}
