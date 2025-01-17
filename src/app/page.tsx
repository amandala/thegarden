// import Image from "next/image";

import { Plant } from "./components/Plant";
import { jan14Events } from "./events";
import { getJan11Plants } from "./helpers";

import styles from "./page.module.css";

export default function Home() {
  const plants = getJan11Plants();

  plants.recordSprouts(jan14Events);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to The Garden </h1>
        <div className={styles.plantGrid}>
          {plants.getPlants().map((plant) => (
            <Plant key={`${plant.cell}`} plant={plant} />
          ))}
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
