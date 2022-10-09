import gsap from "gsap";
import { useEffect } from "react";
import styles from "./styles.module.scss";

export default function ErrorCard() {
  useEffect(() => {
    gsap.set(".error-card .card", { opacity: 0, top: 20 });
    gsap.to(".error-card .card", { opacity: 1, top: 0, delay: 0.4, duration: 0.4 });
  }, []);

  return (
    <section className={styles["error-card"] + " error-card container"}>
      <div className="card">
        <h1>Page introuvable</h1>
        <p>La page n'existe pas ou à été déplacée.</p>
      </div>
    </section>
  );
}
