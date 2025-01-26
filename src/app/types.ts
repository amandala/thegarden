export type PlantEvent = {
  plantId: string;
  cell: string;
  type: "sprout" | "failure" | "transplant";
};

export type SproutEvent = PlantEvent & {
  dateSprouted: Date;
};

export type FailedEvent = PlantEvent & {
  failureType: "germination" | "transplant";
};

export type TransplantEvent = PlantEvent & {};

export type GerminationTimeframeDates = {
  startDate: Date;
  endDate: Date;
};

export type GerminationTimeframeNumDays = {
  rangeStartDays: number;
  rangeEndDays: number;
};
