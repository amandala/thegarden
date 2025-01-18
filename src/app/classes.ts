import { dateInFuture } from "./helpers";
import {
  GerminationTimeframeDates,
  GerminationTimeframeNumDays,
  SproutEvent,
} from "./types";

export class Plant {
  readonly key: string;
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
    this.key = this.getRandomInt().toString();
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

  private getRandomInt() {
    return Math.floor(Math.random() * 1000);
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

  public getPlantByCell(cell: string): Plant | undefined {
    return this.plantings.find((planting) => planting.cell === cell);
  }

  public getPlantById(id: string): Plant | undefined {
    return this.plantings.find((planting) => planting.key === id);
  }

  private setCellSprouted(cell: string, dateSprouted: Date) {
    const plant = this.getPlantByCell(cell);
    if (plant) plant.setSproutDate(dateSprouted);
    else throw new Error(`Unable to find plant at ${cell}`);
  }

  public plantSeed(plant: Plant) {
    this.plantings.push(plant);
  }

  public getPlants() {
    return this.plantings;
  }

  public recordSprouts(sproutEvents: Array<SproutEvent>) {
    sproutEvents.forEach((e) => {
      this.setCellSprouted(e.cell, e.dateSprouted);
    });
  }
}
