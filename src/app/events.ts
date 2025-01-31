import { FailedEvent, SproutEvent } from "./types";

export const gardenEvents: Array<SproutEvent | FailedEvent> = [
  {
    plantId: "4A-aru-11",
    dateSprouted: new Date(2025, 0, 14),
    type: "sprout",
  },
  {
    plantId: "4C-pac-11",
    dateSprouted: new Date(2025, 0, 14),
    type: "sprout",
  },
  {
    plantId: "3B-rai-11",
    dateSprouted: new Date(2025, 0, 14),
    type: "sprout",
  },
  {
    plantId: "3C-let-11",
    dateSprouted: new Date(2025, 0, 14),
    type: "sprout",
  },
  {
    plantId: "3D-let-11",
    dateSprouted: new Date(2025, 0, 14),
    type: "sprout",
  },
  {
    plantId: "1A-ore-11",
    dateSprouted: new Date(2025, 0, 17),
    type: "sprout",
  },
  {
    plantId: "1D-thy-11",
    dateSprouted: new Date(2025, 0, 17),
    type: "sprout",
  },
  {
    plantId: "2D-tom-11",
    dateSprouted: new Date(2025, 0, 20),
    type: "sprout",
  },
  {
    plantId: "2A-bel-11",
    type: "sprout",
    dateSprouted: new Date(2025, 0, 28),
  },
  {
    plantId: "2C-hab-11",
    type: "failure",
    failureType: "germination",
  },
  {
    plantId: "4B-bea-11",
    type: "failure",
    failureType: "germination",
  },
  {
    plantId: "1C-bas-11",
    type: "sprout",
    dateSprouted: new Date(2025, 0, 28),
  },
];
