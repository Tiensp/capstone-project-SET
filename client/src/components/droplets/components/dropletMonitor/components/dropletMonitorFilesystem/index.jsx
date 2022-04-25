import React, { useEffect, useState } from "react";
import { method, URL_Request } from "../../../../../../API";
import { useParams } from "react-router";
import LoadingEffect from "../../../../../loading";

export default function DropletMonitorFileSystem() {
  const [filesystemFree, setFilesystemFree] = useState(undefined);
  const { id } = useParams();
  useEffect(() => {
    method.get(URL_Request.droplets.fileSystem(id)).then((res) => {
      console.log(res.data);
      setFilesystemFree(res.data);
    });
  }, []);

  return (
    <div>
      {filesystemFree ? ( <div>Droplet Monitor File System Size</div>) : <LoadingEffect/>}
    </div>
 );
}
