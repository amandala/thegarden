// import Image from "next/image";

import { PlantingTray } from "./components/PlantingTray";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to The Garden </h1>
        <PlantingTray />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
