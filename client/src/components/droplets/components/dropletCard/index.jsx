import React, { useState } from "react";
import "../../../../styles/components/droplet.css";
import { Link } from "react-router-dom";
import routes from "../../../../routes";

export default function DropletCard(props) {
  const droplet = props.droplet;
  const [hidden, setHidden] = useState("droplet_hidden");
  const {
    id,
    name,
    status,
    networks
  } = droplet;

  return (
    <div className="droplet">
      <div className="droplet_top">
        <div className="droplet_name">
          <h4>Name</h4>
          <p> {name}</p>
        </div>
        <button
          className="droplet_button"
          onClick={() => {
            if (hidden === "droplet_hidden") {
              setHidden("droplet_visible");
            } else {
              setHidden("droplet_hidden");
            }
          }}
        >
          x
        </button>
        <Link to={`${routes.droplets.path}/${id}`}>View more</Link>
      </div>
      <div className={hidden}>


        <div className="droplet_id">
          <h4>Id</h4>
          <p>{id}</p>
        </div>

        <div className="droplet_networks">
          <h4>Networks</h4>
          <h5>IPv4</h5>
          {networks.v4.map((network, index) => {
            return (
              <div key={index}>
                <span>IPv4 {index + 1}</span>
                <p>IP Address: {network.ip_address}</p>
                <p>Netmask: {network.netmask}</p>
                <p>Gateway: {network.gateway}</p>
                <p>Type: {network.type}</p>
              </div>
            );
          })}
          <h5>IPv6</h5>
          {networks.v6.map((network, index) => {
            return (
              <div key={index}>
                <span>IPv6 {index + 1}</span>
                <p>IP Address: {network.ip_address}</p>
                <p>Netmask: {network.netmask}</p>
                <p>Gateway: {network.gateway}</p>
                <p>Type: {network.type}</p>
              </div>
            );
          })}
        </div>


        <div className="droplet_status">
          <h4>Status</h4>
          <p>{status}</p>
        </div>
      </div>
    </div>
  );
}
