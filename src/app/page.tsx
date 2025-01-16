// import Image from "next/image";

import { jan14Events } from "./events";
import { daysBetween, getJan11Plants, getPrettyGermDate } from "./helpers";

import styles from "./page.module.css";

export default function Home() {
  const plants = getJan11Plants();

  plants.recordSprouts(jan14Events);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Welcome to The Garden </h1>
        <div className={styles.plantGrid}>
          {plants.getPlants().map((plant) => {
            const germDates = plant.calculateGerminationTimeframe();

            console.log("germ dates", germDates);
            return (
              <div
                className={styles.plant}
                key={`${plant.name.toString()}${plant.datePlanted.getDate()}${plant.variant?.toString()}`}
              >
                <h3>
                  {plant.variant?.toString()} {plant.name.toString()}
                  {plant.dateSprouted ? "  🌱" : null}
                </h3>
                <h4 className={styles.Cell}>Cell: {plant.cell}</h4>
                <p>
                  {" "}
                  Planted{" "}
                  {plant.datePlanted.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                {plant.dateSprouted ? (
                  <p>
                    Sprouted in{" "}
                    {daysBetween(plant.datePlanted, plant.dateSprouted)} days
                  </p>
                ) : null}
                {germDates.startDate &&
                germDates.endDate &&
                !plant.dateSprouted ? (
                  <p>
                    ⏳{" "}
                    {germDates?.startDate
                      ? getPrettyGermDate(germDates?.startDate)
                      : "unknown"}{" "}
                    -{" "}
                    {germDates?.endDate
                      ? getPrettyGermDate(germDates?.endDate)
                      : "unknown"}
                    {" ("}
                    {plant.germinationTimeframe?.rangeStartDays}
                    {"-"}
                    {plant.germinationTimeframe?.rangeEndDays}
                    {") days"}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
