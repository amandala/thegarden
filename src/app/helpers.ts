import { Plant, PlantingTray } from "./classes";

export const getJan11Plants = () => {
  const tray = new PlantingTray();
  tray.plantSeed(
    new Plant({
      name: "Oregano",
      datePlanted: new Date(2025, 0, 11),
      cell: "1A",
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Rosemary",
      datePlanted: new Date(2025, 0, 11),
      cell: "1B",
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Basil",
      datePlanted: new Date(2025, 0, 11),
      cell: "1C",
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Thyme",
      datePlanted: new Date(2025, 0, 11),
      cell: "1D",
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Bell Pepper",
      datePlanted: new Date(2025, 0, 11),
      cell: "2A",
      variant: "Orange",
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Jalapeño",
      datePlanted: new Date(2025, 0, 11),
      cell: "2B",
      variant: "Black Magic",
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Habanero Pepper",
      datePlanted: new Date(2025, 0, 11),
      cell: "2C",
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Tomato",
      datePlanted: new Date(2025, 0, 11),
      cell: "2D",
      variant: "Yellow Pear",
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Rainbow Chard",
      datePlanted: new Date(2025, 0, 11),
      cell: "3A",
      dateSprouted: new Date(2025, 0, 14),
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Rainbow Kale",
      datePlanted: new Date(2025, 0, 11),
      cell: "3B",
      dateSprouted: new Date(2025, 0, 14),
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Lettuce",
      datePlanted: new Date(2025, 0, 11),
      cell: "3C",
      variant: "Bibb",
      dateSprouted: new Date(2025, 0, 14),
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Lettuce",
      datePlanted: new Date(2025, 0, 11),
      cell: "3D",
      variant: "Gourmet Leaf",
      dateSprouted: new Date(2025, 0, 14),
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
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Pac Choi",
      datePlanted: new Date(2025, 0, 11),
      cell: "4C",
      dateSprouted: new Date(2025, 0, 14),
    })
  );

  tray.plantSeed(
    new Plant({
      name: "Eggplant",
      datePlanted: new Date(2025, 0, 11),
      cell: "4D",
    })
  );

  return tray.getPlants();
};

export const daysBetween = (date1: Date, date2: Date) => {
  const millisecondsDiff = date2.getTime() - date1.getTime();

  const aDayInMs = 24 * 60 * 60 * 1000;

  return Math.round(millisecondsDiff / aDayInMs);
};
