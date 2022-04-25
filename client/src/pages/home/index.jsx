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
import {DropletMonitorFileSystem, DropletMonitorCPU, DropletMonitorBandwidth } from "../../components/droplets/components/dropletMonitor/components";


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
            <Route exact path= {routes.droplets.droplet.path} element = {<DropletInfo/>}>
              <Route index element = {<DropletMonitorFileSystem/>}/>
              <Route path={routes.droplets.droplet.fileSystem} element={<DropletMonitorFileSystem />}/>
              <Route path={routes.droplets.droplet.CPU} element={<DropletMonitorCPU />}/>
              <Route path={routes.droplets.droplet.bandwidth} element={<DropletMonitorBandwidth />}/>
            </Route>
          </Routes>
        </div>
		
      </div>
    </React.StrictMode>
  );
}
