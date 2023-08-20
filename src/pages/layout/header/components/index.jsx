import React from "react";
import styles from "../css/index.module.css";
export default function Header({ currentPage }) {
  return (
    <div className={styles.container}>
      <h3>{currentPage || "contactUs"}</h3>
    </div>
  );
}
