import { dateInFuture } from "./helpers";
import {
  GerminationTimeframeDates,
  GerminationTimeframeNumDays,
  SproutEvent,
} from "./types";

export class Plant {
  readonly name: string;
  datePlanted: Date;
  cell?: string;
  variant?: string;
  dateSprouted?: Date;
  germinationTimeframe?: GerminationTimeframeNumDays;
  germinationDates?: GerminationTimeframeDates;

  constructor({
    name,
    datePlanted,
    cell,
    variant,
    dateSprouted,
    germinationTimeframe,
  }: {
    name: string;
    datePlanted: Date;
    cell: string;
    variant?: string;
    dateSprouted?: Date;
    germinationTimeframe?: {
      rangeStartDays: number;
      rangeEndDays: number;
    };
  }) {
    this.name = name;
    this.datePlanted = datePlanted;
    this.cell = cell;
    this.variant = variant;
    this.dateSprouted = dateSprouted;

    if (germinationTimeframe) {
      this.germinationTimeframe = {
        rangeStartDays: germinationTimeframe.rangeStartDays,
        rangeEndDays: germinationTimeframe.rangeEndDays,
      };

      this.germinationDates =
        this.calculateGerminationTimeframe(germinationTimeframe);
    }
  }

  public setPlantedDate(datePlanted: Date) {
    this.datePlanted = datePlanted;
  }

  public getPlantedDate() {
    return this.datePlanted;
  }

  public setSproutDate(dateSprouted: Date) {
    this.dateSprouted = dateSprouted;
  }

  public calculateGerminationTimeframe = (
    germinationTimeframe: GerminationTimeframeNumDays
  ): GerminationTimeframeDates => {
    return {
      startDate: dateInFuture(
        this.getPlantedDate(),
        germinationTimeframe.rangeStartDays
      ),
      endDate: dateInFuture(
        this.getPlantedDate(),
        germinationTimeframe.rangeEndDays
      ),
    };
  };
}

export class PlantingTray {
  private plantings: Array<Plant>;

  constructor() {
    this.plantings = [];
  }

  private getPlantByCell(cell: string): Plant | undefined {
    return this.plantings.find((planting) => planting.cell === cell);
  }

  public plantSeed(plant: Plant) {
    this.plantings.push(plant);
  }

  public getPlants() {
    return this.plantings;
  }

  private setCellSprouted(cell: string, dateSprouted: Date) {
    const plant = this.getPlantByCell(cell);
    plant?.setSproutDate(dateSprouted);
  }

  public recordSprouts(sproutEvents: Array<SproutEvent>) {
    sproutEvents.forEach((e) => {
      this.setCellSprouted(e.cell, e.dateSprouted);
    });
  }
}
