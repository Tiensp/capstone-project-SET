import { method, URL_Request } from "../../API";
import { errorMessage } from "../../constant/index";


function validate(fullname, username, email, password, confirmPassword, phoneNumber) {
  if (!fullname || !username || !email || !password || !confirmPassword || !phoneNumber) {
    alert(errorMessage.signup.fields);
    
    return false;
  }
  
  if (fullname.legth <6){
    alert(errorMessage.signup.fullname);
    return false;
  }

  if (!username.includes(" ") && username.legth <6) {
    alert(errorMessage.signup.username);
    return false;
  }

  if (!email.includes("@")) {
    alert(errorMessage.signup.email);
    return false;
  }

  if (password.length < 6) {
    alert(errorMessage.signup.password);
    return false;
  }

  if (password !== confirmPassword) {
    alert(errorMessage.signup.confirmPassword);
    return false;
  }

  if (phoneNumber.length < 10 && /[a-zA-Z]/.test(phoneNumber)) {
    alert(errorMessage.signup.phoneNumber);
    return false;
  }
  return true;
}

function handleSignUp(fullname, username, email, password, confirmPassword, phoneNumber) {
  if (validate(fullname, username, email, password, confirmPassword, phoneNumber)) {
    method
      .post(URL_Request.signup.url, {
        fullName: fullname,
        username: username,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
      })
      .then((response) => {
        if (response){
          alert("Sign up successfully");
          window.location.href = "/login";
        }
      })
      .catch((error) => {
        alert(errorMessage.signup.all);
      });
    return true;
  }
}

export { handleSignUp };
