import React from "react";
import "../../../../styles/components/droplets/dropletDetails.css";

export default function DropletDetails(props) {
  const { droplet } = props;
  return (
    <div className="dropletDetails">
      <div className="droplet_top">
        <div className="droplet_name">
          <h4>Name</h4>
          <p> {droplet.name}</p>
        </div>
      </div>
      <div className="dropletInfo">
        <div className="droplet_backup_id">
          <h4>Backup Ids</h4>
          {Array.isArray(droplet.backup_ids) &&
            droplet.backup_ids.map((backup_id, index) => {
              return <p key={index}>{backup_id}</p>;
            })}
        </div>

        <div className="droplet_created_at">
          <h4>Created At: </h4>
          <div>{droplet.created_at}</div>
        </div>

        <div className="droplet_disk">
          <h4>Disk</h4>
          <p>{droplet.disk}</p>
        </div>

        <div className="droplet_features">
          <h4>Features</h4>
          {Array.isArray(droplet.features) &&
            droplet.features.map((feature, index) => {
              return <p key={index}>{feature}</p>;
            })}
        </div>

        <div className="droplet_id">
          <h4>Id</h4>
          <p>{droplet.id}</p>
        </div>

        <div className="droplet_image">
          <h4>Image</h4>
          <p>Created: {droplet.image.created_at}</p>
          <p>Description: {droplet.image.description}</p>
          <p>Distribution: {droplet.image.distribution}</p>
          <p>Id: {droplet.image.id}</p>
          <p>Min Disk Size: {droplet.image.min_disk_size}</p>
          <p>Size Gigabytes: {droplet.image.size_gigabytes}</p>
          <p>Slug: {droplet.image.slug}</p>
        </div>

        <div className="droplet_kernel">
          <h4>Kernel</h4>
          <p>{droplet.kernel || "No"}</p>
        </div>

        <div className="droplet_locked">
          <h4>Locked</h4>
          <p>{droplet.locked ? "Yes" : "No"}</p>
        </div>

        <div className="droplet_memory">
          <h4>Memory</h4>
          <p>{droplet.memory}</p>
        </div>

        <div className="droplet_networks">
          <h4>Networks</h4>
          <h5>IPv4</h5>
          {droplet.networks.v4.map((network, index) => {
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
          {droplet.networks.v6.map((network, index) => {
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
            <p>Available: {droplet.size.available ? "Yes" : "No"}</p>
            <p>Disk: {droplet.size.disk}</p>
            <p>Description: {droplet.size.description}</p>
            <p>Memory: {droplet.size.memory}</p>
            <p>Price Monthly: {droplet.size.price_monthly}</p>
            <p>Price Hourly: {droplet.size.price_hourly}</p>
            <p>Slug: {droplet.size.slug}</p>
            <p>Vcpus: {droplet.size.vcpus}</p>
            <p>Transfer: {droplet.size.transfer}</p>
          </div>
        </div>

        <div className="droplet_status">
          <h4>Status</h4>
          <p>{droplet.status}</p>
        </div>
      </div>
    </div>
  );
}
