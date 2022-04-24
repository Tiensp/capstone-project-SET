import React, {useEffect, useState} from "react";
import DropletCard from "./components/dropletCard";
import DropletInfo from "./components/dropletInfo";
import { method, URL_Request } from "../../API";

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
            return <DropletCard key={index} droplet={droplet}></DropletCard>;
          })}
      </div>

    </div>
  );
}


export { DropletCard, DropletInfo };