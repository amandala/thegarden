import {
  GerminationTimeframeDates,
  GerminationTimeframeNumDays,
} from "../types";

export const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const daysSinceSprouted = (dateSprouted: Date, dateHarvested?: Date) => {
  return daysBetween(dateSprouted, dateHarvested ? dateHarvested : new Date());
};

export const calculateGerminationTimeframe = ({
  datePlanted,
  germinationTimeframe,
}: {
  datePlanted: Date;
  germinationTimeframe: GerminationTimeframeNumDays;
}): GerminationTimeframeDates => {
  return {
    startDate: dateInFuture(datePlanted, germinationTimeframe.rangeStartDays),
    endDate: dateInFuture(datePlanted, germinationTimeframe.rangeEndDays),
  };
};

export const dateInFuture = (startDate: Date, daysToAdd: number) => {
  const date = new Date(startDate.valueOf());
  date.setDate(date.getDate() + daysToAdd);
  return date;
};

export const getPrettyDate = (date: Date) => {
  const newDate = new Date(date);

  return newDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

export const daysDifference = (date: Date): number => {
  const suppliedDate = new Date(date);
  const today = new Date();
  return Math.ceil(
    (suppliedDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );
};

export const daysBetween = (date1: Date, date2: Date) => {
  const newDate1 = new Date(date1);
  const newDate2 = new Date(date2);
  const millisecondsDiff = newDate2.getTime() - newDate1.getTime();

  const aDayInMs = 24 * 60 * 60 * 1000;

  return Math.round(millisecondsDiff / aDayInMs);
};

export const isToday = (date: Date) => {
  const suppliedDate = new Date(date);
  const today = new Date();

  if (
    today?.getFullYear() === suppliedDate?.getFullYear() &&
    today?.getMonth() === suppliedDate?.getMonth() &&
    today?.getDate() === suppliedDate?.getDate()
  ) {
    return true;
  }
  return false;
};
