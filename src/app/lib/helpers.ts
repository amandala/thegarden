import { Plant, PlantingTray } from "../classes";
import { sproutEvents } from "../events";
import {
  GerminationTimeframeDates,
  GerminationTimeframeNumDays,
} from "../types";

export const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const daysSinceSprouted = (dateSprouted: Date) => {
  return daysBetween(dateSprouted, new Date());
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

export const getJan11Plants = () => {
  const tray = new PlantingTray();
  tray.plantSeed(
    new Plant({
      name: "Oregano",
      datePlanted: new Date(2025, 0, 11),
      cell: "1A",
      germinationTimeframe: {
        rangeStartDays: 7,
        rangeEndDays: 21,
      },
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Rosemary",
      datePlanted: new Date(2025, 0, 11),
      cell: "1B",
      germinationTimeframe: {
        rangeStartDays: 7,
        rangeEndDays: 28,
      },
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Basil",
      datePlanted: new Date(2025, 0, 11),
      cell: "1C",
      germinationTimeframe: {
        rangeStartDays: 7,
        rangeEndDays: 21,
      },
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Thyme",
      datePlanted: new Date(2025, 0, 11),
      cell: "1D",
      germinationTimeframe: {
        rangeStartDays: 7,
        rangeEndDays: 21,
      },
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Bell Pepper",
      datePlanted: new Date(2025, 0, 11),
      cell: "2A",
      variant: "Orange",
      germinationTimeframe: {
        rangeStartDays: 10,
        rangeEndDays: 12,
      },
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Jalapeño",
      datePlanted: new Date(2025, 0, 11),
      cell: "2B",
      variant: "Black Magic",
      germinationTimeframe: {
        rangeStartDays: 8,
        rangeEndDays: 18,
      },
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Habanero Pepper",
      datePlanted: new Date(2025, 0, 11),
      cell: "2C",
      germinationTimeframe: {
        rangeStartDays: 10,
        rangeEndDays: 12,
      },
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Tomato",
      datePlanted: new Date(2025, 0, 11),
      cell: "2D",
      variant: "Yellow Pear",
      germinationTimeframe: {
        rangeStartDays: 7,
        rangeEndDays: 14,
      },
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Rainbow Chard",
      datePlanted: new Date(2025, 0, 11),
      cell: "3A",
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Rainbow Kale",
      datePlanted: new Date(2025, 0, 11),
      cell: "3B",
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Lettuce",
      datePlanted: new Date(2025, 0, 11),
      cell: "3C",
      variant: "Bibb",
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Lettuce",
      datePlanted: new Date(2025, 0, 11),
      cell: "3D",
      variant: "Gourmet Leaf",
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Arugula",
      datePlanted: new Date(2025, 0, 11),
      cell: "4A",
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Bean",
      datePlanted: new Date(2025, 0, 11),
      cell: "4B",
      variant: "Bush",
      germinationTimeframe: {
        rangeStartDays: 6,
        rangeEndDays: 14,
      },
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Pac Choi",
      datePlanted: new Date(2025, 0, 11),
      cell: "4C",
      germinationTimeframe: {
        rangeStartDays: 5,
        rangeEndDays: 10,
      },
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Eggplant",
      datePlanted: new Date(2025, 0, 11),
      cell: "4D",
    })
  );

  tray.recordCellEvents(sproutEvents);

  return tray;
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
