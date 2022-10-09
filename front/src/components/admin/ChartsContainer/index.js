// Imports
import React from "react";

// Styles
import styles from "./styles.module.scss";

export default function ChartsContainer({ children }) {
  // - Render
  return <div className={styles.chartsContainer}>{children}</div>;
}
