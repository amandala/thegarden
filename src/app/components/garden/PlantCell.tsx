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
import TombstonePokingOut from "@/app/animations/TombstonePokingOut";

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
        <h4 className={styles.Cell}>Cell: {plant.location.locationId}</h4>
        <PlantedDate date={plant.datePlanted} />
        {plant.dateSprouted && <SproutedOn dateSprouted={plant.dateSprouted} />}
        {plant.germinationDates && !plant.dateSprouted && (
          <GerminationDates
            germDates={plant.germinationDates}
            failedToSprout={plant.failedToSprout}
          />
        )}
        {plant.dateSprouted ? <GrowingSeedling /> : null}
        {plant.failedToSprout ? <TombstonePokingOut /> : null}
      </div>
    </Link>
  );
};
