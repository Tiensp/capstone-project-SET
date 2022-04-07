import { method, URL_Request } from "../API";

function getMe(context, token) {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return method.get(URL_Request.me.url, config).then((response) => {
    context.setAccount(response.data);
  });
}

export { getMe };
