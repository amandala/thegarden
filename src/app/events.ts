import { FailedEvent, SproutEvent } from "./types";

export const sproutEvents: Array<SproutEvent | FailedEvent> = [
  {
    cell: "4A",
    dateSprouted: new Date(2025, 0, 14),
    type: "sprout",
  },
  {
    cell: "4C",
    dateSprouted: new Date(2025, 0, 14),
    type: "sprout",
  },
  {
    cell: "3B",
    dateSprouted: new Date(2025, 0, 14),
    type: "sprout",
  },
  {
    cell: "3C",
    dateSprouted: new Date(2025, 0, 14),
    type: "sprout",
  },
  {
    cell: "3D",
    dateSprouted: new Date(2025, 0, 14),
    type: "sprout",
  },
  {
    cell: "1A",
    dateSprouted: new Date(2025, 0, 17),
    type: "sprout",
  },
  {
    cell: "1D",
    dateSprouted: new Date(2025, 0, 17),
    type: "sprout",
  },
  {
    cell: "2D",
    dateSprouted: new Date(2025, 0, 20),
    type: "sprout",
  },
  {
    cell: "2A",
    type: "failure",
    failureType: "germination",
  },
  {
    cell: "2C",
    type: "failure",
    failureType: "germination",
  },
  {
    cell: "4B",
    type: "failure",
    failureType: "germination",
  },
];
