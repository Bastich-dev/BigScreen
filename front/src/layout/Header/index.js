import { useUserContext } from "@providers/AuthProvider";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export default function Header() {
  const { user } = useUserContext();
  return (
    <header className={styles.header + " container"}>
      <Link to="/" className={styles.logo}>
        <img alt="BigScreen logo" src="/bigscreen.svg" />
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/old-answers" className="btn btn-primary">
              Mes réponses sauvegardées
            </Link>
          </li>
          <li>
            <Link to="/login" className="btn btn-secondary">
              <span className="material-symbols-outlined">person</span> {user?.email || "Se connecter"}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
