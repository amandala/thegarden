export type CellEvent = {
  cell: string;
  type: "sprout" | "failure" | "transplant";
};

export type SproutEvent = CellEvent & {
  dateSprouted: Date;
};

export type FailedEvent = CellEvent & {
  failureType: "germination" | "transplant";
};

export type GerminationTimeframeDates = {
  startDate: Date;
  endDate: Date;
};

export type GerminationTimeframeNumDays = {
  rangeStartDays: number;
  rangeEndDays: number;
};
