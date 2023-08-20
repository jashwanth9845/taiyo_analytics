import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./layout/sidebar/components"; // Import Sidebar component from the folder
import Contact from "./contact/components"; // Import Contact component from the folder
import ChartAndMap from "./chartAndMaps/components"; // Import ChartAndMap component from the folder
import "./index.css";

export default function Main() {
  // Render the main layout with sidebar and routed components
  return (
    <div className="container">
      {/* Render the Sidebar component */}
      <Sidebar />

      {/* Define routes using react-router-dom */}
      <Routes>
        {/* Default route to redirect to the Contact page */}
        <Route path={"/"} element={<Navigate to="/contact" replace />} />

        {/* Render the Contact component for the /contact route */}
        <Route path={"/contact"} element={<Contact />} />

        {/* Render the ChartAndMap component for the /analytics route */}
        <Route path={"/analytics"} element={<ChartAndMap />} />
      </Routes>
    </div>
  );
}
