import { Plant, PlantingTray } from "./classes";

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

  return tray;
};

export const daysBetween = (date1: Date, date2: Date) => {
  const millisecondsDiff = date2.getTime() - date1.getTime();

  const aDayInMs = 24 * 60 * 60 * 1000;

  return Math.round(millisecondsDiff / aDayInMs);
};

export const dateInFuture = (startDate: Date, daysToAdd: number) => {
  const date = new Date(startDate.valueOf());
  date.setDate(date.getDate() + daysToAdd);
  return date;
};

export const getPrettyGermDate = (date: Date) => {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};
