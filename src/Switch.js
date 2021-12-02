import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { SignUp } from "./screens/SignUp";
import { Login } from "./screens/Login";
import { Dashboard } from "./screens/Dashboard.js";
import { IndividualStock } from "./screens/IndividualStock";

const Switch = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/stock/:id" exact element={<IndividualStock />} />
      </Routes>
    </Router>
  );
};

export default Switch;
