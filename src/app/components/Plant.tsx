import { Plant as PlantType } from "../classes";
import { daysBetween, getPrettyDate } from "../helpers";
import {
  GerminationTimeframeDates,
  GerminationTimeframeNumDays,
} from "../types";
import cx from "classnames";

import styles from "./Plant.module.css";

const PlantedDate = ({ date }: { date: Date }) => {
  return <p className={styles.PlantedDate}>Planted {getPrettyDate(date)}</p>;
};

const SproutedDate = ({
  planted,
  sprouted,
}: {
  planted: Date;
  sprouted: Date;
}) => {
  return <p>🌱 Sprouted in {daysBetween(planted, sprouted)} days</p>;
};

const GerminationDates = ({
  germDates,
  germDays,
}: {
  germDates: GerminationTimeframeDates;
  germDays?: GerminationTimeframeNumDays;
}) => {
  return (
    <p>
      {`⏳ ${getPrettyDate(germDates.startDate)} - 
      ${getPrettyDate(germDates.endDate)} (${germDays?.rangeStartDays} - ${
        germDays?.rangeEndDays
      } days)`}
    </p>
  );
};

export const Plant = ({ plant }: { plant: PlantType }) => {
  return (
    <div>
      <div
        className={cx(styles.Plant, {
          [styles.PlantSprouted]: plant.dateSprouted,
        })}
        key={`${plant.name.toString()}${plant.datePlanted.getDate()}${plant.variant?.toString()}`}
      >
        <h3 className={styles.Name}>
          {plant.variant?.toString()} {plant.name.toString()}
        </h3>
        <h4 className={styles.Cell}>Cell: {plant.cell}</h4>
        <PlantedDate date={plant.datePlanted} />
        {plant.dateSprouted && (
          <SproutedDate
            planted={plant.datePlanted}
            sprouted={plant.dateSprouted}
          />
        )}
        {plant.germinationDates && !plant.dateSprouted && (
          <GerminationDates
            germDates={plant.germinationDates}
            germDays={plant.germinationTimeframe}
          />
        )}
      </div>
    </div>
  );
};
