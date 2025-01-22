import { PlantCell } from "./PlantCell";

import styles from "./PlantingTray.module.css";

import { PlantingTray as PlantingTrayData } from "@/app/classes";

export const PlantingTray = ({ trayData }: { trayData: PlantingTrayData }) => {
  return (
    <div className={styles.Tray} data-testid="planting-tray">
      <div className={styles.PlantGrid}>
        {trayData.getPlants().map((plant) => (
          <PlantCell key={`${plant.cell}`} plant={plant} />
        ))}
      </div>
    </div>
  );
};
