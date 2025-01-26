import { PlantCell } from "./PlantCell";

import styles from "./PlantingTray.module.css";
import { Plant } from "@/app/classes";

export const PlantingTray = ({ plants }: { plants: Array<Plant> }) => {
  return (
    <div className={styles.Tray} data-testid="planting-tray">
      <div className={styles.PlantGrid}>
        {plants.map((plant: Plant) => (
          <PlantCell key={`${plant.id}`} plant={plant} />
        ))}
      </div>
    </div>
  );
};
