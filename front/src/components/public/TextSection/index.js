import gsap from "gsap";
import { useEffect } from "react";
import styles from "./styles.module.scss";

export default function TextSection({ title, body }) {
  useEffect(() => {
    gsap.set(".text-section span", { delay: 0, top: 200 });
    gsap.to(".text-section span", { delay: 0.6, stagger: { each: 0.4 }, top: 0, duration: 1 });
  }, []);

  return (
    <section className={styles["text-section"] + " container text-section"}>
      <h2>
        <span>{title}</span>
      </h2>
      {body}
    </section>
  );
}
