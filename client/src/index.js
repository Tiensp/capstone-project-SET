import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/app/index";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
