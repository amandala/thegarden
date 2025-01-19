"use client";

import { useContext } from "react";
import { GardenContext } from "../garden-provider";

import styles from "./PlantInfoCard.module.css";
import { getPrettyDate } from "../helpers";

export const PlantInfoCard = ({ plantId }: { plantId: string }) => {
  const plantingTray = useContext(GardenContext).plantingTray;
  const plant = plantingTray?.getPlantById(plantId);

  if (!plant) return null;

  return (
    <div>
      <h1>{plant?.name}</h1>
      <div className={styles.Section}></div>
      <div className={styles.Section}>
        <h4>Germination Info</h4>
        <p>Planted {getPrettyDate(plant?.datePlanted)}</p>
        <p></p>
      </div>
    </div>
  );
};
