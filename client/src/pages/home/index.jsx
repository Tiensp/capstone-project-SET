import React from "react";
import Sidebar from "../../components/sidebar";
import TopBar from "../../components/topbar";
import "../../styles/pages/home.css";
import {Routes, Route, Navigate} from "react-router-dom";
import routes from "../../routes";
import  Dashboard  from "../../components/dashboard";
import Account from "../../components/account";
import DropletsPage from "../droplets";
import { DropletInfo } from "../../components/droplets";


export default function Pages() {
  return (
    <React.StrictMode>
      <TopBar />
      <div className="home__container">
        <Sidebar />
        <div className="home__content">
          <Routes>
            <Route path={routes.home.path} element={<Navigate to={routes.dashboard.path} />} />
            <Route path={routes.dashboard.path} element={<Dashboard />}></Route>
            <Route path={routes.login.path} element={<Navigate to={routes.home.path} />}></Route>
            <Route path={routes.account.path} element={<Account />}></Route>
            <Route path= {routes.droplets.path} element = {<DropletsPage/>}/>
            <Route path= {routes.droplets.path + '/:id'} element = {<DropletInfo/>}/>
          </Routes>
        </div>
		
      </div>
    </React.StrictMode>
  );
}
