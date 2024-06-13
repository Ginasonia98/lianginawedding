// src/routes/AppRoutes.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Receipts from "../pages/Receipts";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/receipt" element={<Receipts />} />
      </Routes>
    </>
  );
};

export default App;
