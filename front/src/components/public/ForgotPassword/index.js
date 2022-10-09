import gsap from "gsap";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export default function ForgoPassword() {
  useEffect(() => {
    gsap.set("form", { opacity: 0, top: 20 });
    gsap.to("form", { opacity: 1, top: 0, delay: 0.4, duration: 0.4 });
  }, []);

  const navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();
    console.log(e.target.elements);
    navigate("/admin");
  };

  return (
    <form className={styles.form + " card"} onSubmit={onSubmit}>
      <h1>Mot de passe oublié</h1>
      <label>Email</label>
      <input />

      <button className="btn">Réinitialiser mon mot de passe</button>

      <Link to="/login">Me connecter avec mon compte</Link>
    </form>
  );
}
