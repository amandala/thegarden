"use client";

import {
  getPrettyDate,
  daysDifference,
  daysBetween,
  isToday,
} from "@/app/lib/helpers";

import {
  GerminationTimeframeDates,
  GerminationTimeframeNumDays,
  LocationType,
} from "../../types";

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
  failedToSprout,
}: {
  germDates: GerminationTimeframeDates;
  failedToSprout?: boolean;
}) => {
  if (failedToSprout) return <p>Failed to sprout</p>;

  const daysDiff = daysDifference(germDates.startDate);

  const text = (() => {
    if (daysDiff === 0) return "today";
    if (daysDiff === 1) return "tomorrow";
    if (daysDiff === -1) return "yesterday";
    if (daysDiff < 0) return `${Math.abs(daysDiff)} days ago`;
    return getPrettyDate(germDates.startDate);
  })();

  return (
    <p>
      Expected {text} - {getPrettyDate(germDates.endDate)}
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
}: {
  location: {
    type: LocationType;
    locationId?: string;
  };
}) => {
  return (
    <p>
      Located in {location.type.toLocaleUpperCase()}
      {location.locationId && ` ${location.locationId}`}
    </p>
  );
};

export const PlantAge = ({ daysAlive }: { daysAlive: number | undefined }) => {
  if (daysAlive) {
    return <p>Alive for {daysAlive !== undefined ? daysAlive : "N/A"} days</p>;
  }

  return null;
};

export const SproutedOn = ({ dateSprouted }: { dateSprouted: Date }) => {
  return (
    <p>
      Sprouted
      {isToday(dateSprouted) ? " Today" : ` on ${getPrettyDate(dateSprouted)}`}
    </p>
  );
};
