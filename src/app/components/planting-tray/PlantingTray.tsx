import { Plant } from "@/app/classes";
import { PlantCell } from "./PlantCell";

import styles from "./PlantingTray.module.css";

export const PlantingTray = async ({
  trayData,
}: {
  trayData: Array<Plant>;
}) => {
  return (
    <div className={styles.Tray} data-testid="planting-tray">
      <div className={styles.PlantGrid}>
        {trayData.map((plant) => (
          <PlantCell key={`${plant.cell}`} plant={plant} />
        ))}
      </div>
    </div>
  );
};
