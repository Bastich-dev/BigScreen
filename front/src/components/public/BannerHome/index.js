import styles from "./styles.module.scss";

export default function BannerHome() {
  return (
    <>
      <div className={styles.mask}></div>
      <div className={styles.video}>
        <iframe src="https://www.youtube.com/embed/AZm5RQqFHWk?controls=0&amp;autoplay=1&amp;mute=1&amp;playlist=AZm5RQqFHWk&amp;loop=1" title="v"></iframe>
      </div>
    </>
  );
}
