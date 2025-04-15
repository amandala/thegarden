"use client";

import { Plant } from "../../classes";

import cx from "classnames";

import styles from "./PlantCell.module.css";
import Link from "next/link";
import {
  GerminationDates,
  PlantAge,
  PlantedDate,
  SproutedOn,
} from "../shared/PlantInfoLines";
import GrowingSeedling from "../animations/GrowingSeedling";
import Tombstone from "@/app/components/animations/Tombstone";
import { daysSinceSprouted } from "@/app/lib/helpers";

export const EmptyPlantCell = () => {
  return <div className={cx(styles.Plant, styles.Empty)}></div>;
};

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
        {plant.location && (
          <h4 className={styles.Cell}>Cell: {plant.location.locationId}</h4>
        )}
        {plant.datePlanted && <PlantedDate date={plant.datePlanted} />}
        {plant.dateSprouted && <SproutedOn dateSprouted={plant.dateSprouted} />}
        {plant.germinationDates && !plant.dateSprouted && (
          <GerminationDates
            germDates={plant.germinationDates}
            failedToSprout={plant.failedToSprout}
          />
        )}
        {plant.dateSprouted ? <GrowingSeedling /> : null}
        {plant.dateSprouted && (
          <PlantAge
            daysAlive={daysSinceSprouted(
              plant.dateSprouted,
              plant.dateHarvested
            )}
          />
        )}
        {plant.failedToSprout ? <Tombstone /> : null}
      </div>
    </Link>
  );
};
