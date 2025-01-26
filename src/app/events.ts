import { FailedEvent, SproutEvent } from "./types";

export const gardenEvents: Array<SproutEvent | FailedEvent> = [
  {
    plantId: "4A-aru-11",
    cell: "4A",
    dateSprouted: new Date(2025, 0, 14),
    type: "sprout",
  },
  {
    plantId: "4C-pac-11",
    cell: "4C",
    dateSprouted: new Date(2025, 0, 14),
    type: "sprout",
  },
  {
    plantId: "3B-rai-11",
    cell: "3B",
    dateSprouted: new Date(2025, 0, 14),
    type: "sprout",
  },
  {
    plantId: "3C-let-11",
    cell: "3C",
    dateSprouted: new Date(2025, 0, 14),
    type: "sprout",
  },
  {
    plantId: "3D-let-11",
    cell: "3D",
    dateSprouted: new Date(2025, 0, 14),
    type: "sprout",
  },
  {
    plantId: "1A-ore-11",
    cell: "1A",
    dateSprouted: new Date(2025, 0, 17),
    type: "sprout",
  },
  {
    plantId: "1D-thy-11",
    cell: "1D",
    dateSprouted: new Date(2025, 0, 17),
    type: "sprout",
  },
  {
    plantId: "2D-tom-11",
    cell: "2D",
    dateSprouted: new Date(2025, 0, 20),
    type: "sprout",
  },
  {
    plantId: "2A-bel-11",
    cell: "2A",
    type: "failure",
    failureType: "germination",
  },
  {
    plantId: "2C-hab-11",
    cell: "2C",
    type: "failure",
    failureType: "germination",
  },
  {
    plantId: "4B-bea-11",
    cell: "4B",
    type: "failure",
    failureType: "germination",
  },
];
