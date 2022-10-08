import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.header + " container"}>
      <Link to="/" className={styles.logo}>
        <img alt="BigScreen logo" src="/bigscreen.svg" />
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/answer" className="btn btn-primary">
              Réponses précédentes
            </Link>
          </li>
          <li>
            <Link to="/login" className="btn btn-secondary">
              <span className="material-symbols-outlined">person</span> Se connecter
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
