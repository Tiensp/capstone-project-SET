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
        <div className="others">Other Pages</div>
      </div>
    </div>
  );
}
