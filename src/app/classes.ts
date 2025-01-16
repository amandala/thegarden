import { dateInFuture } from "./helpers";
import { GerminationTimeframeDates, SproutEvent } from "./types";

export class Plant {
  readonly name: string;
  datePlanted: Date;
  cell?: string;
  variant?: string;
  dateSprouted?: Date;
  germinationTimeframe?: {
    // TODO: use this to calculate germination date range based on planting date
    rangeStartDays?: number;
    rangeEndDays?: number;
  };

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
      rangeStartDays?: number;
      rangeEndDays?: number;
    };
  }) {
    this.name = name;
    this.datePlanted = datePlanted;
    this.cell = cell;
    this.variant = variant;
    this.dateSprouted = dateSprouted;
    this.germinationTimeframe = {
      rangeStartDays: germinationTimeframe?.rangeStartDays || undefined,
      rangeEndDays: germinationTimeframe?.rangeEndDays || undefined,
    };
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

  public calculateGerminationTimeframe = (): GerminationTimeframeDates => {
    return {
      startDate: this.germinationTimeframe?.rangeStartDays
        ? dateInFuture(
            this.getPlantedDate(),
            this.germinationTimeframe?.rangeStartDays
          )
        : undefined,
      endDate: this.germinationTimeframe?.rangeEndDays
        ? dateInFuture(
            this.getPlantedDate(),
            this.germinationTimeframe?.rangeEndDays
          )
        : undefined,
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
