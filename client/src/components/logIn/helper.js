import { method, URL_Request } from "../../API";
import { errorMessage } from "../../constant/error";

function validate(email, password) {
  if (email && email.includes("@") && password && password.length >= 6) {
    return true;
  }
  return false;
}

async function handleLogin(context, email, password, remember) {
  if (validate(email, password)) {
    await method
      .post(URL_Request.login.url, {
        email,
        password,
      })
      .then((response) => {
        if (response.token) {
            window.sessionStorage.setItem("token", response.token);
            if (remember) {
                window.localStorage.setItem("token", response.token);
            }
            context.setAccount(response.token)
        }
        else {
            alert(errorMessage.login.invalid);
        }
      });
    return true;
  } else {
    alert(errorMessage.login.invalid);
  }
  return false;
}

export { handleLogin };
