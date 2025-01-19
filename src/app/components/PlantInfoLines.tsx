import { daysBetween, getPrettyDate } from "../helpers";

import {
  GerminationTimeframeDates,
  GerminationTimeframeNumDays,
  Location,
} from "../types";

export const PlantedDate = ({ date }: { date: Date }) => {
  return <p>Planted {getPrettyDate(date)}</p>;
};

export const SproutedDays = ({
  planted,
  sprouted,
}: {
  planted: Date;
  sprouted: Date;
}) => {
  return <p>Sprouted in {daysBetween(planted, sprouted)} days</p>;
};

export const GerminationDates = ({
  germDates,
}: {
  germDates: GerminationTimeframeDates;
}) => {
  return (
    <p>
      Expected
      {` ${getPrettyDate(germDates.startDate)} - 
        ${getPrettyDate(germDates.endDate)}`}
    </p>
  );
};

export const GerminationNumDays = ({
  germDays,
}: {
  germDays: GerminationTimeframeNumDays;
}) => {
  return (
    <p>{`Germination range ${germDays?.rangeStartDays} - ${germDays?.rangeEndDays} days`}</p>
  );
};

export const PlantLocation = ({
  location,
  cell,
}: {
  location: Location;
  cell?: string;
}) => {
  const locationMap: { [key in Location]: string } = {
    tower: "Tower Garden",
    tray: `Planting Tray${cell ? ` (Cell: ${cell})` : ""}`,
    garden: "Garden Bed",
  };

  return <p>Located in {locationMap[location]}</p>;
};
