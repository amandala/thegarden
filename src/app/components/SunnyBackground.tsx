import styles from "./SunnyBackground.module.css";

export const SunnyBackground = () => {
  return (
    <div className={styles.sunnyBackground}>
      <div className={styles.sun}></div>
      <div className={styles.clouds}></div>
    </div>
  );
};
