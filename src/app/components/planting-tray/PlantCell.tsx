"use client";

import { Plant } from "../../classes";

import cx from "classnames";

import styles from "./PlantCell.module.css";
import Link from "next/link";
import {
  GerminationDates,
  PlantedDate,
  SproutedOn,
} from "../shared/PlantInfoLines";
import GrowingSeedling from "../animations/GrowingSeedling";

export const PlantCell = ({ plant }: { plant: Plant }) => {
  return (
    <Link href={`/plant/${plant.id}`}>
      <div
        className={cx(styles.Plant, {
          [styles.PlantSprouted]: plant.dateSprouted,
        })}
        key={plant.id}
      >
        <h3 className={styles.Name}>
          {plant.variant?.toString()} {plant.name.toString()}{" "}
        </h3>
        <h4 className={styles.Cell}>Cell: {plant.cell}</h4>
        <PlantedDate date={plant.datePlanted} />
        {plant.dateSprouted && <SproutedOn dateSprouted={plant.dateSprouted} />}
        {plant.germinationDates && !plant.dateSprouted && (
          <GerminationDates germDates={plant.germinationDates} />
        )}
        {plant.dateSprouted ? <GrowingSeedling /> : null}
      </div>
    </Link>
  );
};
