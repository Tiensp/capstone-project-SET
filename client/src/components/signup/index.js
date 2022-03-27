import React, { useState } from "react";
import "../../styles/signup.css";
import routes from "../../routes";
import { Link } from "react-router-dom";
import { handleSignUp } from "./helper";


export default function Signup() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <div className="signup__page">
      <div className="signup__background">
        <div className="signup__field">
          <div className="signup__title">Join us</div>
          <div className="signup__form">
            <input
              type="text"
              className="signup__input"
              placeholder="Full name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            ></input>

            <input
              type="text"
              className="signup__input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>

            <input
              type="text"
              className="signup__input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>

            <input
              type="password"
              className="signup__input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <input
              type="password"
              className="signup__input"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>

            <input
              type="text"
              className="signup__input"
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></input>
          </div>
          <button className="signup__button signup__input"
            onClick={(e)=> {handleSignUp(fullname, username, email, password, confirmPassword, phoneNumber)}}
          >
            Create new account
          </button>

          <Link to={routes.login.path} className="login__link" >Already had account?</Link>
        </div>
      </div>
    </div>
  );
}
