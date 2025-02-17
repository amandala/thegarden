export enum PlantEventTypes {
  SEED = "seed",
  SPROUT = "sprout",
  FAILURE = "failure",
  TRANSPLANT = "transplant",
}

type BasePlantEvent = {
  id: string;
  plantId: string;
  eventDate: Date;
};

export type SeedEvent = BasePlantEvent & {
  type: PlantEventTypes.SEED;
  newLocationId: string;
};

export type SproutEvent = BasePlantEvent & {
  type: PlantEventTypes.SPROUT;
};

export type FailedEvent = BasePlantEvent & {
  type: PlantEventTypes.FAILURE;
  failureType: "germination" | "transplant";
  newLocationId: string;
};

export type TransplantEvent = BasePlantEvent & {
  type: PlantEventTypes.TRANSPLANT;
  newLocationId: string;
};

export const isLocationBasedEvent = (
  event: PlantEvent
): event is SeedEvent | TransplantEvent => {
  return "newLocationId" in event;
};

export type PlantEvent =
  | SeedEvent
  | SproutEvent
  | TransplantEvent
  | FailedEvent;

export type GerminationTimeframeDates = {
  startDate: Date;
  endDate: Date;
};

export type GerminationTimeframeNumDays = {
  rangeStartDays: number;
  rangeEndDays: number;
};

export enum LocationType {
  TRAY = "tray",
  TOWER = "tower",
  GARDEN = "garden",
  GRAVEYARD = "graveyard",
}

export type Location = {
  type: LocationType;
  locationId: string;
};
