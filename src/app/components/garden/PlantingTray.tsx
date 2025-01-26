import { PlantCell } from "./PlantCell";

import styles from "./PlantingTray.module.css";
import { Plant, PlantingTrayCells } from "@/app/classes";

export const PlantingTray = ({ cells }: { cells: PlantingTrayCells }) => {
  return (
    <div className={styles.Tray} data-testid="planting-tray">
      <div className={styles.PlantGrid}>
        {Object.entries(cells).map(([key, cell]: [string, Plant | null]) =>
          cell ? (
            <PlantCell key={key} plant={cell} />
          ) : (
            <div key={key}>EMPTY</div>
          )
        )}
      </div>
    </div>
  );
};
