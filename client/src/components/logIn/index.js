import React from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";
import routes from "../../routes";

export default function Login() {
  return (
    <div className="login__field">
      <div className="login__title">Log in</div>
      <div className = "login__form">
          <input type ="text" placeholder="Enter email" className="login_email login__input"></input>
          <input type ="password" placeholder="Enter password" className="login_email login__input"></input>
          <input type ="button" className="login__input" value ="Log in"></input>
          <span>OR</span>
      </div>
      <Link to={routes.signup.path} className="signup__link">Don't have an account?</Link>
    </div>
  );
}
