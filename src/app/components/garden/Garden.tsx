"use client";
import useSWR from "swr";
import { fetcher } from "@/app/lib/helpers";
import { PlantingTray } from "./PlantingTray";
import { Garden } from "@/app/classes";
import { useEffect, useState } from "react";

import styles from "./Garden.module.css";
import { Graveyard } from "./Graveyard";
import { LocationType } from "@/app/types";
export const TheGarden = () => {
  const [garden, setGarden] = useState<Garden | null>(null);
  const { data } = useSWR("../api/garden/plants", fetcher);

  useEffect(() => {
    if (data) {
      setGarden(new Garden({ plants: data.plants, events: data.events }));
    }
  }, [data]);

  if (!garden) return <div>checking notes...</div>;

  return (
    <div className={styles.Garden}>
      <div className={styles.Section}>
        <h2 className={styles.Heading}>Tower Garden View</h2>
        <PlantingTray tower cells={garden.towerGarden.cells} />
      </div>
      <div className={styles.Section}>
        <h2 className={styles.Heading}>Planting Tray View</h2>
        <PlantingTray cells={garden.plantingTray.cells} />
      </div>

      <Graveyard
        plants={garden.plants.filter(
          (plant) => plant.location?.type === LocationType.GRAVEYARD
        )}
      />
    </div>
  );
};
