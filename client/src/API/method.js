import axios from "axios";
import { SERVER_URL} from "../constant/index";

const method = {
  get: getMethod,
  post: postMethod,
  delete: deleteMethod,
  update: updateMethod,
};

function getMethod(url, config = {}) {
  return axios.get(`${SERVER_URL}/${url}`, config);
}

function postMethod(url, data) {
  return axios.request({
    method: "post",
    url : `${SERVER_URL}/${url}`,
    data: (data)
  });
}

function deleteMethod(url, data) {
  return axios.request({
    data: (data),
    method: "delete",
    url: `${SERVER_URL}/${url}`,
  });
}

function updateMethod(url, data) {
  return axios.request({
    method: "patch",
    url: `${SERVER_URL}/${url}`,
    data: (data),
  });
}

export { method };
