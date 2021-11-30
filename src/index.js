import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from "axios";

import { App } from "./App";

axios.defaults.baseURL = "https://stock-market-server-django.herokuapp.com";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
