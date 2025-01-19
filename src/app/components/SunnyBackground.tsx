import styles from "./SunnyBackground.module.css";

export const SunnyBackground = () => {
  return (
    <div className={styles.sunnyBackground}>
      <div className={styles.sun}></div>
      <div className={styles.moon}>
        <div className={styles.crater1}></div>
        <div className={styles.crater2}></div>
        <div className={styles.crater3}></div>
      </div>
      <div className={styles.clouds}></div>
      <div className={styles.stars}>
        {Array.from({ length: 30 }).map((_, index) => (
          <div key={index} className={styles.star}></div>
        ))}
      </div>
    </div>
  );
};
