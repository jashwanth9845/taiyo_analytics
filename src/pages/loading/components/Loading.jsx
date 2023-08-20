import React from "react";
import styles from "../css/loading.module.css";
export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <img src="loading.svg" />
      </div>
    </div>
  );
}
