"use client";

import cx from "classnames";

import styles from "./PlantInfoCard.module.css";
import {
  GerminationDates,
  GerminationNumDays,
  PlantAge,
  PlantedDate,
  PlantLocation,
  SproutedDays,
  SproutedOn,
} from "../shared/PlantInfoLines";
import GrowingSeedling from "../animations/GrowingSeedling";
import { daysSinceSprouted } from "@/app/helpers";
import useSWR from "swr";
import { fetcher } from "@/app/lib/api";

export const PlantInfoCard = ({ id }: { id: string }) => {
  const { data } = useSWR(`../api/garden/plant/${id}`, fetcher, {});
  const plant = data?.plant;

  if (plant)
    return (
      <div
        className={cx(styles.PlantInfo, {
          [styles.Sprouted]: plant.dateSprouted,
        })}
      >
        <h1>
          {plant.variant} {plant.name}
        </h1>
        <div className={styles.Section}>
          <h4>Planting Info</h4>
          <PlantedDate date={plant.datePlanted} />
          <PlantLocation cell={plant.cell} />
        </div>
        <div className={styles.Section}>
          <h4>Germination Info</h4>
          {plant.dateSprouted && (
            <SproutedDays
              planted={plant.datePlanted}
              sprouted={plant.dateSprouted}
            />
          )}
          {plant.germinationDates && !plant.dateSprouted && (
            <GerminationDates germDates={plant.germinationDates} />
          )}
          {plant.germinationTimeframe && (
            <GerminationNumDays germDays={plant.germinationTimeframe} />
          )}
          {plant.dateSprouted && (
            <PlantAge daysAlive={daysSinceSprouted(plant.dateSprouted)} />
          )}
          {plant.dateSprouted && (
            <SproutedOn dateSprouted={plant.dateSprouted} />
          )}
        </div>
        {plant.dateSprouted && <GrowingSeedling />}
      </div>
    );
};
