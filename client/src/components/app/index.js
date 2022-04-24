import React, { useEffect } from "react";
import { AccountConsumer, AccountProvider } from "../../stores/account";
import WebFont from "webfontloader";
import { authenticate, getTokenFromStorage, handleLogout } from "../../utils";
import { LoginPage, Pages } from "../../pages";

export default function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Merriweather", "Poppins"],
      },
    });
  }, []);

  return (
    <AccountProvider>
      <AccountConsumer>
        {(context) => {
          const token = getTokenFromStorage();
          if (token && token != null) {
            if (!context.account) {
              authenticate(token).then((response) => {
                if (response.status === 200) {
                  context.setAccount(response.data);
                } else {
                  window.location.removeItem("token");
                  window.sessionStorage.removeItem("token");
                }
              }).catch((error)=> {
                handleLogout(context);
              })
            }
            return <Pages></Pages>;
          } else {
            return <LoginPage />;
          }
        }}
      </AccountConsumer>
    </AccountProvider>
  );
}
