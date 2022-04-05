import React from "react";
import Login from "../../components/logIn";
import { Navigate, Route, Routes } from 'react-router-dom'
import "../../styles/login.css";
import routes from "../../routes";
import Signup from "../../components/signup";
import Dashboard from "../dashboard";


export default function LoginPage() {
  return (
      <Routes>
        <Route exact path = {routes.home.path} element = {<Navigate to = {routes.login.path}></Navigate>}></Route>
        <Route exact path = {routes.login.path} element = {<Login></Login>}></Route>
        <Route exact path={`${routes.signup.path}/*`} element={<Signup/>}></Route>
        <Route exact path = {routes.dashboard.path} element = {<Dashboard/>}></Route>
      </Routes>
  );
}