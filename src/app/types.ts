export type SproutEvent = {
  cell: string;
  dateSprouted: Date;
};

export type GerminationTimeframeDates = {
  startDate: Date;
  endDate: Date;
};

export type GerminationTimeframeNumDays = {
  rangeStartDays: number;
  rangeEndDays: number;
};

export type Location = "tower" | "garden" | "tray";
export type GardenStyle = "tower" | "raised-bed";
