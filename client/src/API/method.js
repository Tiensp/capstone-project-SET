import axios from "axios";
import { port_Server, server } from "../constant/server";

const method = {
  get: getMethod,
  post: postMethod,
  delete: deleteMethod,
  update: updateMethod,
};

function getMethod(url, config = {}) {
  return axios.get(`http://${server}:${port_Server}/${url}`, config);
}

function postMethod(url, data) {
  return axios.post(
    `http://${server}:${port_Server}/${url}`,
    JSON.stringify(data)
  );
}

function deleteMethod(url, data) {
  return axios.request({
    data: JSON.stringify(data),
    method: "delete",
    url: `http://${server}:${port_Server}/${url}`,
  });
}

function updateMethod(url, data) {
  return axios.request({
    method: "patch",
    url: `http://${server}:${port_Server}/${url}`,
    data: JSON.stringify(data),
  });
}

export { method };