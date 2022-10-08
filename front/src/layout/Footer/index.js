import React from "react";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <span>Copyright © 2021 Bigscreen, Inc. All rights reserved</span>

        <nav>
          <ul>
            <li>
              <a href="">terms of service</a>
            </li>
            <li>
              <a href="">privacy </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
