"use client";

import { useContext } from "react";

import { PlantCell } from "./PlantCell";

import styles from "./PlantingTray.module.css";
import { GardenContext } from "../../garden-provider";

export const PlantingTray = () => {
  const plantingTray = useContext(GardenContext).plantingTray;

  return (
    <div className={styles.Tray}>
      <div className={styles.PlantGrid}>
        {plantingTray?.getPlants().map((plant) => (
          <PlantCell key={`${plant.cell}`} plant={plant} />
        ))}
      </div>
    </div>
  );
};
