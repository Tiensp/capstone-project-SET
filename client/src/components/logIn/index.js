import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";
import routes from "../../routes";
import { AccountConsumer } from "../../stores/account";
import { handleLogin } from "./helper";

export default function Login() {
  const [emailInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isRememberMe, setRememberMe] = useState(false);

  return (
    <div className="login__page">
      <AccountConsumer>
        {(context) => {
          return (
            <div className="login__field">
              <div className="login__title">Log in</div>
              <div className="login__form">
                <input
                  type="text"
                  placeholder="Enter email"
                  className="login_email login__input"
                  onChange={(e) => setUsernameInput(e.target.value)}
                  value={emailInput}
                />

                <input
                  type="password"
                  placeholder="Enter password"
                  className="login_email login__input"
                  onChange={(e) => setPasswordInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleLogin(
                        context,
                        emailInput,
                        passwordInput,
                        isRememberMe
                      );
                    }
                  }}
                  value={passwordInput}
                />

                <div className="login__remember">
                  <input
                    className=" login__checkbox"
                    type="checkbox"
                    onClick={(e) => {
                      setRememberMe((pre) => (pre ? false : true));
                    }}
                  ></input>
                  <label>Remember me?</label>
                </div>

                <button
                  className="login__button login__input"
                  onClick={() => {
                    handleLogin(
                      context,
                      emailInput,
                      passwordInput,
                      isRememberMe
                    );
                  }}
                >
                  <span>Log in</span>
                </button>
              </div>
              <Link to={routes.signup.path} className="signup__link">
                Don't have an account?
              </Link>
            </div>
          );
        }}
      </AccountConsumer>
    </div>
  );
}
