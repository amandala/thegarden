"use client";

import { useContext } from "react";
import { GardenContext } from "../garden-provider";

import styles from "./PlantInfoCard.module.css";
import {
  GerminationDates,
  GerminationNumDays,
  PlantAge,
  PlantedDate,
  PlantLocation,
  SproutedDays,
  SproutedOn,
} from "./PlantInfoLines";

export const PlantInfoCard = ({ plantId }: { plantId: string }) => {
  const plantingTray = useContext(GardenContext).plantingTray;
  const plant = plantingTray?.getPlantById(plantId);

  if (!plant) return null;

  return (
    <div>
      <h1>
        {plant.variant} {plant.name}
      </h1>
      <div className={styles.Section}>
        <h4>Planting Info</h4>
        <PlantedDate date={plant.datePlanted} />
        <PlantLocation location={plant.location} cell={plant.cell} />
      </div>
      <div className={styles.Section}>
        <h4>Germination Info</h4>
        {plant.dateSprouted ? (
          <SproutedDays
            planted={plant.datePlanted}
            sprouted={plant.dateSprouted}
          />
        ) : null}
        {plant.germinationDates ? (
          <GerminationDates germDates={plant.germinationDates} />
        ) : null}
        {plant.germinationTimeframe ? (
          <GerminationNumDays germDays={plant.germinationTimeframe} />
        ) : null}
        {plant.dateSprouted ? (
          <PlantAge daysAlive={plant.daysSinceSprouted()} />
        ) : null}
        {plant.dateSprouted ? (
          <SproutedOn dateSprouted={plant.dateSprouted} />
        ) : null}
      </div>
    </div>
  );
};
