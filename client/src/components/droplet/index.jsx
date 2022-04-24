import React, { useState } from "react";
import "../../styles/components/droplet.css";

export default function Droplet(props) {
  const droplet = props.droplet;
  const [hidden, setHidden] = useState("droplet_visible");
  const {
    backup_ids,
    created_at,
    disk,
    features,
    id,
    image,
    kernel,
    locked,
    memory,
    name,
    networks,
    size,
    status,
  } = droplet;
  return (
    <div className="droplet">
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

      <div className="droplet_name">
        <h4>Name</h4>
        <p> {name}</p>
      </div>
      <div className={hidden}>
        <div className="droplet_backup_id">
          <h4>Backup Ids</h4>
          {backup_ids.map((backup_id, index) => {
            return <p key={index}>{backup_id}</p>;
          })}
        </div>

        <div className="droplet_created_at">
          <h4>Created At: </h4>
          <div>{created_at}</div>
        </div>

        <div className="droplet_disk">
          <h4>Disk</h4>
          <p>{disk}</p>
        </div>

        <div className="droplet_features">
          <h4>Features</h4>
          {features.map((feature, index) => {
            return <p key={index}>{feature}</p>;
          })}
        </div>

        <div className="droplet_id">
          <h4>Id</h4>
          <p>{id}</p>
        </div>

        <div className="droplet_image">
          <h4>Image</h4>
          <p>Created: {image.created_at}</p>
          <p>Description: {image.description}</p>
          <p>Distribution: {image.distribution}</p>
          <p>Id: {image.id}</p>
          <p>Min Disk Size: {image.min_disk_size}</p>
          <p>Size Gigabytes: {image.size_gigabytes}</p>
          <p>Slug: {image.slug}</p>
        </div>

        <div className="droplet_kernel">
          <h4>Kernel</h4>
          <p>{kernel || "No"}</p>
        </div>

        <div className="droplet_locked">
          <h4>Locked</h4>
          <p>{locked ? "Yes" : "No"}</p>
        </div>

        <div className="droplet_memory">
          <h4>Memory</h4>
          <p>{memory}</p>
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

        <div className="droplet_size">
          <h4>Size</h4>
          <div>
            <p>Available: {size.available ? "Yes" : "No"}</p>
            <p>Disk: {size.disk}</p>
            <p>Description: {size.description}</p>
            <p>Memory: {size.memory}</p>
            <p>Price Monthly: {size.price_monthly}</p>
            <p>Price Hourly: {size.price_hourly}</p>
            <p>Slug: {size.slug}</p>
            <p>Vcpus: {size.vcpus}</p>
            <p>Transfer: {size.transfer}</p>
          </div>
        </div>

        <div className="droplet_status">
          <h4>Status</h4>
          <p>{status}</p>
        </div>
      </div>
    </div>
  );
}
