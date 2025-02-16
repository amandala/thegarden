type PlantEvent = {
  //TODO: make id mandatory once DB data done
  id?: string;
  plantId: string;
  eventDate: Date;
};

export enum PlantEventTypes {
  SEED = "seed",
  SPROUT = "sprout",
  FAILURE = "failure",
  TRANSPLANT = "transplant",
}

export type SeedEvent = PlantEvent & {
  type: PlantEventTypes.SEED;
  newLocationId: string;
};

export type SproutEvent = PlantEvent & {
  type: PlantEventTypes.SPROUT;
};

export type FailedEvent = PlantEvent & {
  type: PlantEventTypes.FAILURE;
  failureType: "germination" | "transplant";
};

export type TransplantEvent = PlantEvent & {
  type: PlantEventTypes.TRANSPLANT;
  newLocationId: string;
};

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
