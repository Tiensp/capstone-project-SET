import { method, URL_Request } from "../API";


function getMe(context, token) {
  console.log(token)
  const config = {
    headers: { Authorization: `Bearer ${token}` }
};
  method.get(URL_Request.me.url, config).then((response) => {
    console.log(response);
  });

  return method.get(URL_Request.me.url, config);
}

export {getMe}
