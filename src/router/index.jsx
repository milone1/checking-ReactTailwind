import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/:reserva/:hotel/:numPassenger" element={<Home />} />;
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
