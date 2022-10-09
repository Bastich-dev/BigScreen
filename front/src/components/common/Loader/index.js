import styles from "./styles.module.scss";

export default function Loader({ full = false }) {
  return (
    <div className={full ? styles.full : ""}>
      <div className={styles.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
