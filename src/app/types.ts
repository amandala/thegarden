type PlantEvent = {
  plantId: string;
  eventDate: Date;
};

export enum PlantEventTypes {
  SEED = "seed",
  SPROUT = "sprout",
  FAILURE = "failure",
  TRANSPLANT = "transplant",
}

export type SeedEvent = {
  type: PlantEventTypes.SEED;
};

export type SproutEvent = PlantEvent & {
  type: PlantEventTypes.SPROUT;
  // TODO: use PlantEvent eventDate instead of dup date
  dateSprouted: Date;
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
