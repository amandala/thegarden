import React from "react";
import styles from "./GrowingSeedling.module.css";

const GrowingSeedling: React.FC = () => {
  return (
    <div className={styles.seedlingContainer}>
      <div className={styles.seedling}>
        <div className={styles.stem}></div>
        <div className={`${styles.leaf} ${styles.leafLeft}`}></div>
        <div className={`${styles.leaf} ${styles.leafRight}`}></div>
      </div>
    </div>
  );
};

export default GrowingSeedling;
