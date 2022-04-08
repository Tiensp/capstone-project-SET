import React from "react";
import {
  Home,
  Timeline,
  TrendingUp,
  Report,
  BarChart,
  WorkOutline,
  PermIdentity,
  ChatBubbleOutline,
  Storefront,
  AttachMoney,
  MailOutline,
  DynamicFeed,
} from "@mui/icons-material";
import "../../styles/components/sidebar.css";
import { Link } from "react-router-dom";
import routes from "../../routes";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__wrapper">
        <div className="menu">
          <h3 className="menu__title">Dashboard</h3>
          <ul className="menu__list">
            <Link className="list-item" to={routes.dashboard.path}>
              <Home className="list-item__icon" />
              Home
            </Link>

            <li className="list-item">
              <Timeline className="list-item__icon" />
              Analytics
            </li>

            <li className="list-item">
              <TrendingUp className="list-item__icon" />
              Sales
            </li>
          </ul>
        </div>

        <div className="menu">
          <h3 className="menu__title">Payment</h3>
          <ul className="menu__list">
            <li className="list-item">
              <PermIdentity className="list-item__icon" />
              Users
            </li>

            <li className="list-item">
              <Storefront className="list-item__icon" />
              Products
            </li>

            <li className="list-item">
              <AttachMoney className="list-item__icon" />
              Transactions
            </li>
          </ul>
        </div>

        <div className="menu">
          <h3 className="menu__title">Notifications</h3>
          <ul className="menu__list">
            <li className="list-item">
              <MailOutline className="list-item__icon" />
              Mail
            </li>
            <li className="list-item">
              <DynamicFeed className="list-item__icon" />
              Feedback
            </li>
            <li className="list-item">
              <ChatBubbleOutline className="list-item__icon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="menu">
          <h3 className="menu__title">Staff</h3>
          <ul className="menu__list">
            <li className="list-item">
              <WorkOutline className="list-item__icon" />
              Manage
            </li>
            <li className="list-item">
              <BarChart className="list-item__icon" />
              Reports
            </li>
            <li className="list-item">
              <Report className="list-item__icon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
