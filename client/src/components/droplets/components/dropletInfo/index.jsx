import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { method, URL_Request } from "../../../../API";
import DropletDetails from "./dropletDetails";

export default function DropletInfo() {
  const { id } = useParams();
  const [droplet, setDroplet] = useState();

  useEffect(() => {
    method.get(`${URL_Request.droplets.url}/${id}`).then((res) => {
      console.log(res.data.droplet);
      setDroplet(res.data.droplet);
    });
  }, []);

  console.log(1);

  return (
    <div>
      {droplet && <DropletDetails droplet={droplet} />}
    </div>

  );
}
