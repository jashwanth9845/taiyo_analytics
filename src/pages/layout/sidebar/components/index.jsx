import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../css/index.module.css";
const Sidebar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/analytics">Charts and Maps</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
