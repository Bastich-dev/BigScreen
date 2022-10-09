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
              <a target="_blank" rel="noopenner noreferrer" href="https://www.bigscreenvr.com/">
                terms of service
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopenner noreferrer" href="https://www.bigscreenvr.com/">
                privacy{" "}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
