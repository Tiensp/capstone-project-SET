import React from "react";
import Topbar from "../../components/topbar";
import Sidebar from "../../components/sidebar";
import "../../styles/pages/dashboard.css";
export default function Dashboard() {
  return (
    <div>
      <Topbar />
      <div className="dashboard__container">
        <Sidebar />
        {/* <Routes>
          <Route path={routes.dashboard.path + "/*"} element={<div>Other pages</div>} />
          <Route path={routes.account.path} element={<AccountPage />} />
        </Routes> */}
        <div className="others">Dashboard here</div>
      </div>
    </div>
  );
}
