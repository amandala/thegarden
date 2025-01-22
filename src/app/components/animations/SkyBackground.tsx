import styles from "./SkyBackground.module.css";

export const SkyBackground = () => {
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
        <div className={styles.shootingStar}></div>
        <div className={styles.shootingStar2}></div>
        <div className={styles.uap}></div>
      </div>
      <div className={styles.cloudwrapperOne}>
        <div className={styles.cloud}></div>
      </div>
      <div className={styles.cloudwrapperTwo}>
        <div className={styles.cloud}></div>
      </div>
      <div className={styles.cloudwrapperThree}>
        <div className={styles.cloud}></div>
      </div>
      <div className={styles.cloudwrapperFour}>
        <div className={styles.cloud}></div>
      </div>
    </div>
  );
};
