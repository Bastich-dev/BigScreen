import AdminProvider from "@providers/AdminProvider";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

export default function AdminLayout({ children }) {
  const { pathname } = useLocation();
  return (
    <section className={styles["admin-layout"] + " container"}>
      <aside className={styles.aside}>
        <nav>
          <ul>
            {navLinks.map((link, key) => (
              <li key={key} className={pathname === link.path ? styles.activeLink : ""}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className={styles.content}>
        <AdminProvider>{children}</AdminProvider>
      </main>
    </section>
  );
}

const navLinks = [
  {
    path: "/admin",
    label: "Statistiques",
  },
  {
    path: "/admin/answers",
    label: "Réponses",
  },
  {
    path: "/admin/surveys",
    label: "Questionnaires",
  },
];
