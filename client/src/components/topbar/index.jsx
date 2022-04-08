import React from "react";
import "../../styles/components/topbar.css";
import { NotificationsNone, Logout } from "@mui/icons-material";
import { Link } from "react-router-dom";
import routes from "../../routes";
import { AccountConsumer } from "../../stores/account";

export default function TopBar() {
  
  function handleLogout(context) {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    window.location.href = routes.login.path;
    context.setAccount(undefined);
  }

  return (
    <AccountConsumer>
      {(account) => {
        return (
          <div className="topbar">
            <div className="topbar__wrapper">
              <div className="topLeft">
                <Link to={routes.dashboard.path}>
                  <span className="logo">TNTmonitor</span>
                </Link>
              </div>

              <div className="topRight">
                <div className="icon">
                  <NotificationsNone />
                  <span className="icon__icon-badge">2</span>
                </div>

                <div className="icon topBarRight__element" >
                  <button
                    onClick={() => {
                      handleLogout(account);
                    }}
                    className="topBar__logout"
                  >
                    <Logout />
                  </button>
                </div>

                <div className="topBar__avatar ">
                  <Link to={routes.account.path}>
                    <img
                      src="https://haycafe.vn/wp-content/uploads/2022/03/Avatar-hai-doc.jpg"
                      alt="avt"
                      className="account-avatar"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </AccountConsumer>
  );
}
