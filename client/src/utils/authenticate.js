import { method, URL_Request } from "../API";

function authenticate(token) {

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    return method.get(URL_Request.me.url, config)
  
}

export { authenticate };
