import React from "react";
import "../../../../styles/components/droplets/dropletCard.css";
import { Link } from "react-router-dom";
import routes from "../../../../routes";

export default function DropletCard(props) {
  const droplet = props.droplet;
  const { id, name, status } = droplet;

  return (
    <div className="dropletCard">
      <div className="dropletCard_name">
        <h4>Name</h4>
        <p> {name}</p>
      </div>

      <div className="dropletCard_id">
        <h4>Id</h4>
        <p>{id}</p>
      </div>

      <div className="dropletCard_status">
        <h4>Status</h4>
        <p>{status}</p>
      </div>
      <Link to={`${routes.droplets.path}/${id}`}>View more</Link>
    </div>
  );
}
