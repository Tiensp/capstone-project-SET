import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { method, URL_Request } from "../../../../API";
import DropletDetails from "./dropletDetails";
import LoadingEffect from "../../../loading";

export default function DropletInfo() {
  const { id } = useParams();
  const [droplet, setDroplet] = useState();

  useEffect(() => {
    method.get(`${URL_Request.droplets.url}/${id}`).then((res) => {
      console.log(res.data.droplet);
      setDroplet(res.data.droplet);
    });
  }, []);

  return (
    <div>
      {droplet ? (
        <div>
          <DropletDetails droplet={droplet} />
        </div>
      ) : (
        <LoadingEffect/>
      )}
    </div>
  );
}
