import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/app/index";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AccountProvider } from "./stores/account";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <AccountProvider>
        <App />
      </AccountProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
