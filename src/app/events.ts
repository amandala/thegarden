import {
  FailedEvent,
  PlantEventTypes,
  SproutEvent,
  TransplantEvent,
} from "./types";

export const gardenEvents: Array<SproutEvent | FailedEvent | TransplantEvent> =
  [
    {
      plantId: "4A-aru-11",
      dateSprouted: new Date(2025, 0, 14),
      eventDate: new Date(2025, 0, 14),
      type: PlantEventTypes.SPROUT,
    },
    {
      plantId: "4C-pac-11",
      dateSprouted: new Date(2025, 0, 14),
      eventDate: new Date(2025, 0, 14),
      type: PlantEventTypes.SPROUT,
    },
    {
      plantId: "3B-rai-11",
      dateSprouted: new Date(2025, 0, 14),
      eventDate: new Date(2025, 0, 14),
      type: PlantEventTypes.SPROUT,
    },
    {
      plantId: "3C-let-11",
      dateSprouted: new Date(2025, 0, 14),
      eventDate: new Date(2025, 0, 14),
      type: PlantEventTypes.SPROUT,
    },
    {
      plantId: "3D-let-11",
      dateSprouted: new Date(2025, 0, 14),
      eventDate: new Date(2025, 0, 14),
      type: PlantEventTypes.SPROUT,
    },
    {
      plantId: "1A-ore-11",
      dateSprouted: new Date(2025, 0, 17),
      eventDate: new Date(2025, 0, 17),
      type: PlantEventTypes.SPROUT,
    },
    {
      plantId: "1D-thy-11",
      dateSprouted: new Date(2025, 0, 17),
      eventDate: new Date(2025, 0, 17),
      type: PlantEventTypes.SPROUT,
    },
    {
      plantId: "2D-tom-11",
      dateSprouted: new Date(2025, 0, 20),
      eventDate: new Date(2025, 0, 20),
      type: PlantEventTypes.SPROUT,
    },
    {
      plantId: "2A-bel-11",
      type: PlantEventTypes.SPROUT,
      dateSprouted: new Date(2025, 0, 28),
      eventDate: new Date(2025, 0, 28),
    },
    {
      plantId: "2C-hab-11",
      type: PlantEventTypes.FAILURE,
      failureType: "germination",
      eventDate: new Date(2025, 0, 28),
    },
    {
      plantId: "4B-bea-11",
      type: PlantEventTypes.FAILURE,
      failureType: "germination",
      eventDate: new Date(2025, 0, 28),
    },
    {
      plantId: "1C-bas-11",
      type: PlantEventTypes.SPROUT,
      dateSprouted: new Date(2025, 0, 28),
      eventDate: new Date(2025, 0, 28),
    },
    {
      plantId: "3A-rai-11",
      type: PlantEventTypes.FAILURE,
      failureType: "germination",
      eventDate: new Date(2025, 1, 2),
    },
    {
      plantId: "4D-egg-11",
      type: PlantEventTypes.FAILURE,
      failureType: "germination",
      eventDate: new Date(2025, 1, 2),
    },
    {
      plantId: "2B-jal-11",
      type: PlantEventTypes.FAILURE,
      failureType: "germination",
      eventDate: new Date(2025, 1, 2),
    },
    // Feb 2 Transplant Events
    {
      plantId: "2A-bel-11",
      type: PlantEventTypes.TRANSPLANT,
      eventDate: new Date(2025, 1, 2),
      newLocationId: "tower_2A",
    },
    {
      plantId: "3B-rai-11",
      type: PlantEventTypes.TRANSPLANT,
      eventDate: new Date(2025, 1, 2),
      newLocationId: "tower_4B",
    },
    {
      plantId: "3C-let-11",
      type: PlantEventTypes.TRANSPLANT,
      eventDate: new Date(2025, 1, 2),
      newLocationId: "tower_5A",
    },
    {
      plantId: "3D-let-11",
      type: PlantEventTypes.TRANSPLANT,
      eventDate: new Date(2025, 1, 2),
      newLocationId: "tower_5D",
    },
    {
      plantId: "4C-pac-11",
      type: PlantEventTypes.TRANSPLANT,
      eventDate: new Date(2025, 1, 2),
      newLocationId: "tower_4A",
    },
    {
      plantId: "4A-aru-11",
      type: PlantEventTypes.TRANSPLANT,
      eventDate: new Date(2025, 1, 2),
      newLocationId: "tower_2A",
    },
    {
      plantId: "1A-ore-11",
      type: PlantEventTypes.TRANSPLANT,
      eventDate: new Date(2025, 1, 2),
      newLocationId: "tower_3A",
    },
    {
      plantId: "1D-thy-11",
      type: PlantEventTypes.TRANSPLANT,
      eventDate: new Date(2025, 1, 2),
      newLocationId: "tower_3D",
    },
    {
      plantId: "1C-bas-11",
      type: PlantEventTypes.TRANSPLANT,
      eventDate: new Date(2025, 1, 2),
      newLocationId: "tower_1A",
    },
    {
      plantId: "2D-tom-11",
      type: PlantEventTypes.TRANSPLANT,
      eventDate: new Date(2025, 1, 2),
      newLocationId: "tower_1D",
    },
    {
      plantId: "PLT1A-cha-02",
      type: PlantEventTypes.SPROUT,
      dateSprouted: new Date(2025, 1, 10),
      eventDate: new Date(2025, 1, 10),
    },
  ];
