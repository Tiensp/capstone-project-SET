import { TokenObject } from "@loopback/authentication-jwt";
import { JSONPrimitive } from "@loopback/core";
import axios from "axios";
require('dotenv').config();


function getMethod(url : string) {
  console.log(process.env.DIGITALOCEAN_API_TOKEN);
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${process.env.DIGITALOCEAN_API_TOKEN}`,
    }
  })
}
export {getMethod}