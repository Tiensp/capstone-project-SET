import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { method, URL_Request } from "../../../../API";
import "../../../../styles/components/droplets/dropletInfo.css"
import DropletDetails from "../dropletDetails";
import LoadingEffect from "../../../loading";
import DropletMonitor from "../dropletMonitor";

export default function DropletInfo() {
  const { id } = useParams();
  const [droplet, setDroplet] = useState();

  useEffect(() => {
    method.get(`${URL_Request.droplets.url}/${id}`).then((res) => {
      setDroplet(res.data.droplet);
    });
  }, []);

  return (
    <div>
      {droplet ? (
        <div className="dropletInfo">
          <DropletDetails droplet={droplet} />
          <DropletMonitor/>
        </div>
      ) : (
        <LoadingEffect/>
      )}
    </div>
  );
}
