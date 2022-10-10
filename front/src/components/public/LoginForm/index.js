import { useUserContext } from "@providers/AuthProvider";
import { useLoadingContext } from "@providers/LoadingProvider";
import { login } from "@utils/api";
import gsap from "gsap";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export default function LoginForm() {
  const { setLoading } = useLoadingContext();
  const { setUser } = useUserContext();

  useEffect(() => {
    gsap.set("form", { opacity: 0, top: 20 });
    gsap.to("form", { opacity: 1, top: 0, delay: 0.4, duration: 0.4 });
  }, []);

  const navigate = useNavigate();

  const onSubmit = e => {
    setLoading(true);
    e.preventDefault();
    login({
      email: e.target.elements[0].value,
      password: e.target.elements[1].value,
    })
      .then(e => {
        setUser(e);
        navigate("/admin");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form className={styles.form + " card"} onSubmit={onSubmit}>
      <h1>Connexion</h1>
      <label>Email</label>
      <input />
      <label>Mot de passe</label>
      <input />

      <button className="btn">Se connecter</button>

      <div>ID Test : johndoe@example.org</div>
      <div>MDP Test : password123</div>

      {/* <Link to="/forgot-password">Mot de passe oublié ?</Link> */}
    </form>
  );
}
