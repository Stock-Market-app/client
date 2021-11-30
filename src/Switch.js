import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { SignUp } from "./screens/SignUp";
import { Login } from "./screens/Login";
import { Dashboard } from "./screens/Dashboard.js";

const Switch = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default Switch;
