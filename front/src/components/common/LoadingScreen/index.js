import Loader from "@components/common/Loader";
import styles from "./styles.module.scss";

export default function LoadingScreen() {
  return (
    <div className={styles["loading-screen"]}>
      <Loader />
      <span>Chargement</span>
    </div>
  );
}
