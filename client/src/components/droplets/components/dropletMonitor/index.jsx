import React from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import routes from "../../../../routes";
import "../../../../styles/components/droplets/dropletMonitor.css";

export default function DropletMonitor() {
  const { id } = useParams();
  return (
    <div className="dropletMonitor">
      <h1>Monitor</h1>
      <ul className="dropletMonitor_nav">
        <li>
          <Link to={`${routes.droplets.path}/${id}/fileSystem`}>
            File System
          </Link>
        </li>
        <li>
          <Link to={`${routes.droplets.path}/${id}/CPU`}>CPU</Link>
        </li>
        <li>
          <Link to={`${routes.droplets.path}/${id}/bandwidth`}>Bandwidth</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
