import cx from "classnames";

import { EmptyPlantCell, PlantCell } from "./PlantCell";

import styles from "./PlantingTray.module.css";
import { Plant, PlantingTrayCells, TowerGardenCells } from "@/app/classes";

export const PlantingTray = ({
  cells,
  tower,
}: {
  cells: PlantingTrayCells | TowerGardenCells;
  tower?: boolean;
}) => {
  return (
    <div className={styles.Tray} data-testid="planting-tray">
      <div className={cx(styles.PlantGrid, { [styles.TowerGrid]: tower })}>
        {Object.entries(cells).map(([key, cell]: [string, Plant | null]) =>
          cell ? (
            <PlantCell key={key} plant={cell} />
          ) : (
            <EmptyPlantCell key={key} />
          )
        )}
      </div>
    </div>
  );
};
