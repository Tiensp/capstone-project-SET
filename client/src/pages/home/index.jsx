import React from "react";
import Sidebar from "../../components/sidebar";
import TopBar from "../../components/topbar";
import "../../styles/pages/home.css";
import {Routes, Route, Navigate} from "react-router-dom";
import routes from "../../routes";
import AccountPage from "../account";
import  Dashboard  from "../../components/dashboard";

export default function Pages() {
  return (
    <div>
      <TopBar />
      <div className="home__container">
        <Sidebar />
        <div className="home__content">
          <Routes>
            <Route path={routes.home.path} element={<Navigate to={routes.dashboard.path} />} />
            <Route path={routes.dashboard.path} element={<Dashboard />}></Route>
            <Route path={routes.login.path} element={<Navigate to={'/'} />}></Route>
            <Route path={routes.account.path} element={<AccountPage />}></Route>
          </Routes>
        </div>
		
      </div>
    </div>
  );
}
