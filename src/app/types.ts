export type SproutEvent = {
  cell: string;
  dateSprouted: Date;
};

export type GerminationTimeframeDates = {
  startDate: Date;
  endDate: Date;
};

export type GerminationTimeframeNumDays = {
  rangeStartDays?: number;
  rangeEndDays?: number;
};

export type PlantInfo = {
  name: string;
  datePlanted: Date;
  cell: string;
  variant: string;
  dateSprouted: Date;
  germinationTimeframe: GerminationTimeframeNumDays;
};
