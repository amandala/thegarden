// import Image from "next/image";
import { daysBetween, getJan11Plants } from "./helpers";
import styles from "./page.module.css";

export default function Home() {
  const plants = getJan11Plants();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to The Garden</h1>
        <div className={styles.plantGrid}>
          {plants.map((plant) => (
            <div
              className={styles.plant}
              key={`${plant.name.toString()}${plant.datePlanted.getDate()}${plant.variant?.toString()}`}
            >
              <h2>
                {plant.variant?.toString()} {plant.name.toString()}
                {plant.dateSprouted ? "  🌱" : null}
              </h2>
              <p> Planted {plant.datePlanted.toLocaleDateString()}</p>
              {plant.dateSprouted ? (
                <p>
                  Sprouted in{" "}
                  {daysBetween(plant.datePlanted, plant.dateSprouted)} days
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
