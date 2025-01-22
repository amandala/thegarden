"use client";

import useSWR from "swr";
import { PlantCell } from "./PlantCell";

import styles from "./PlantingTray.module.css";
import { fetcher } from "@/app/lib/api";
import { Plant } from "@/app/classes";

export const PlantingTray = () => {
  // error, isLoading
  const { data } = useSWR("../api/garden/plants", fetcher);

  if (data)
    return (
      <div className={styles.Tray} data-testid="planting-tray">
        <div className={styles.PlantGrid}>
          {data.tray.plantings.map((plant: Plant) => (
            <PlantCell key={`${plant.cell}`} plant={plant} />
          ))}
        </div>
      </div>
    );
};
