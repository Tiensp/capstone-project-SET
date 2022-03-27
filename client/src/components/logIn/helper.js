import { method, URL_Request } from "../../API";
import { errorMessage } from "../../constant/index";

function validate(email, password) {
  if (email && email.includes("@") && password && password.length >= 6) {
    return true;
  }
  return false;
}

function handleLogin(context, email, password, remember) {
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
          context.setAccount(response.data.token);
        } else {
          alert(errorMessage.login.invalid);
        }
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response){
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
