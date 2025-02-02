export type PlantEvent = {
  plantId: string;
  eventDate: Date;
};

export type SproutEvent = PlantEvent & {
  type: "sprout";
  dateSprouted: Date;
};

export type FailedEvent = PlantEvent & {
  type: "failure";
  failureType: "germination" | "transplant";
};

export type TransplantEvent = PlantEvent & {
  type: "transplant";
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
