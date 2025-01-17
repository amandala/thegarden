import { Plant as PlantType } from "../classes";
import { daysBetween, getPrettyGermDate } from "../helpers";
import {
  GerminationTimeframeDates,
  GerminationTimeframeNumDays,
} from "../types";

import styles from "./Plant.module.css";

const PlantedDate = ({ date }: { date: Date }) => {
  return (
    <p>
      Planted
      {date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })}
    </p>
  );
};

const SproutedDate = ({
  planted,
  sprouted,
}: {
  planted: Date;
  sprouted: Date;
}) => {
  return <p>Sprouted in {daysBetween(planted, sprouted)} days</p>;
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
      {`⏳ ${getPrettyGermDate(germDates.startDate)} - 
      ${getPrettyGermDate(germDates.endDate)} (${germDays?.rangeStartDays} - ${
        germDays?.rangeEndDays
      } days)`}
    </p>
  );
};

export const Plant = ({ plant }: { plant: PlantType }) => {
  const germDates = plant.calculateGerminationTimeframe();

  return (
    <div>
      <div
        className={styles.Plant}
        key={`${plant.name.toString()}${plant.datePlanted.getDate()}${plant.variant?.toString()}`}
      >
        <h3>
          {plant.variant?.toString()} {plant.name.toString()}
          {plant.dateSprouted ? "  🌱" : null}
        </h3>
        <h4 className={styles.Cell}>Cell: {plant.cell}</h4>
        <PlantedDate date={plant.datePlanted} />
        {plant.dateSprouted && (
          <SproutedDate
            planted={plant.datePlanted}
            sprouted={plant.dateSprouted}
          />
        )}
        {germDates.startDate && germDates.endDate && !plant.dateSprouted && (
          <GerminationDates
            germDates={germDates}
            germDays={plant.germinationTimeframe}
          />
        )}
      </div>
    </div>
  );
};
