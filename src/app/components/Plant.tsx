"use client";

import { Plant } from "../classes";

import cx from "classnames";

import styles from "./Plant.module.css";
import Link from "next/link";
import { GerminationDates, PlantedDate, SproutedDays } from "./PlantInfoLines";
import GrowingSeedling from "./GrowingSeedling";

export const PlantCell = ({ plant }: { plant: Plant }) => {
  return (
    <Link href={`/plant/${plant.key}`}>
      <div
        className={cx(styles.Plant, {
          [styles.PlantSprouted]: plant.dateSprouted,
        })}
        key={plant.key}
      >
        <h3 className={styles.Name}>
          {plant.variant?.toString()} {plant.name.toString()}{" "}
        </h3>
        <h4 className={styles.Cell}>Cell: {plant.cell}</h4>
        <PlantedDate date={plant.datePlanted} />
        {plant.dateSprouted && (
          <>
            <SproutedDays
              planted={plant.datePlanted}
              sprouted={plant.dateSprouted}
            />
          </>
        )}
        {plant.germinationDates && !plant.dateSprouted && (
          <GerminationDates germDates={plant.germinationDates} />
        )}
        {plant.dateSprouted ? <GrowingSeedling /> : null}
      </div>
    </Link>
  );
};
