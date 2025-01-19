import { useEffect, useState } from "react";
import { getPrettyDate, daysDifference, daysBetween } from "../helpers";

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
  const [startDateText, setStartDateText] = useState("");

  useEffect(() => {
    const today = new Date();
    const daysDiff = daysDifference(germDates.startDate, today);

    const text = (() => {
      if (daysDiff === 0) return "today";
      if (daysDiff === 1) return "tomorrow";
      if (daysDiff === -1) return "yesterday";
      if (daysDiff < 0) return `${Math.abs(daysDiff)} days ago`;
      return getPrettyDate(germDates.startDate);
    })();

    setStartDateText(text);
  }, [germDates.startDate]);

  return (
    <p>
      Expected {startDateText} - {getPrettyDate(germDates.endDate)}
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

export const PlantAge = ({ daysAlive }: { daysAlive: number | undefined }) => {
  if (daysAlive) {
    return <p>Alive for {daysAlive !== undefined ? daysAlive : "N/A"} days</p>;
  }

  return null;
};

export const SproutedOn = ({ dateSprouted }: { dateSprouted: Date }) => {
  return <p>Sprouted on {getPrettyDate(dateSprouted)}</p>;
};
