import { method, URL_Request } from "../../API";
import { errorMessage } from "../../constant/index";
import routes from "../../routes";
import { getMe } from "../../utils";
function validate(email, password) {
  if (email && email.includes("@") && password && password.length >= 6) {
    return true;
  }
  return false;
}

function handleLogin(context, email, password, remember, navigator) {
  if (validate(email, password)) {
    method
      .post(URL_Request.login.url, {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data && response.data.token) {
          window.sessionStorage.setItem("token", response.data.token);
          if (remember) {
            window.localStorage.setItem("token", response.data.token);
          }
          getMe(context, response.data.token);
          navigator(routes.dashboard.path);
        } else {
          alert(errorMessage.login.invalid);
        }
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.error.message);
        }
        return false;
      });
    return true;
  } else {
    alert(errorMessage.login.invalid);
  }
  return false;
}

export { handleLogin };
