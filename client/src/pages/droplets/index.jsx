import React, { useEffect, useState } from "react";
import { method , URL_Request} from "../../API";
import Droplet from "../../components/droplet";

export default function Droplets() {
  const [droplets, setDroplets] = useState([]);
  useEffect(() => {
    method.get(URL_Request.droplets.url).then((res) => {
      setDroplets(res.data.droplets);
    });
  }, []);

  return (
    <div className="droplets">
      <h1>Droplets</h1>
      <div>
        {Array.isArray(droplets) &&
          droplets.map((droplet, index) => {
            return <Droplet key={index} droplet={droplet}></Droplet>;
          })}
      </div>

      <input type="button" value="Add new Droplet"></input>
    </div>
  );
}
