import React, { useEffect, useState } from "react";
import { method } from "../../API";
import Droplet from "../../components/droplet";

export default function Droplets() {
  const [droplets, setDroplets] = useState([]);
  useEffect(() => {
    method.get("/droplets").then((res) => {
      setDroplets(res.data.droplets);
    });
  }, []);

  return (
    <div>
      <h1>Droplets</h1>
      <div>
        {Array.isArray(droplets) &&  droplets.map((droplet, index) => {
          return (
            <Droplet
              key = {index}
              droplet = {droplet}
            ></Droplet>
          );
        })}
      </div>
    </div>
  );
}
