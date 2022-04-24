import React, {useEffect, useState} from "react";
import DropletCard from "./components/dropletCard";
import DropletInfo from "./components/dropletInfo";
import { method, URL_Request } from "../../API";
import { Route, Routes } from "react-router";
import routes from "../../routes";

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

      <Routes>
        <Route path = {`${routes.droplets.path}/:id`} element ></Route>
      </Routes>

      <input type="button" value="Add new Droplet"></input>
    </div>
  );
}


export { DropletCard, DropletInfo };