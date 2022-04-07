import React from "react";
import "../../styles/components/topbar.css";
import { NotificationsNone, Settings } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../routes";

export default function Topbar() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(routes.account.path);
  };

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

          <div className="icon">
            <Settings />
          </div>

          <div>
            <Link to={routes.account.path} onClick={handleClick}>
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
}
