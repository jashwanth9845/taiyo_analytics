import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./layout/sidebar/components"; // Import Sidebar component from the folder
import Contact from "./contact/components"; // Import Contact component from the folder
import ChartAndMap from "./chartAndMaps/components"; // Import ChartAndMap component from the folder
import "./index.css";
export default function Main() {
  return (
    <div className="container">
      <Sidebar />
      <Routes>
        <Route path={"/"} element={<Navigate to="/contact" replace />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/analytics"} element={<ChartAndMap />} />
      </Routes>
    </div>
  );
}
