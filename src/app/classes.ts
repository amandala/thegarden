import { calculateGerminationTimeframe } from "./helpers";
import {
  GerminationTimeframeDates,
  GerminationTimeframeNumDays,
  SproutEvent,
} from "./types";

export class Garden {
  id: string;
  plantingTrays: Array<PlantingTray>;
  plants: Array<Plant>;

  constructor() {
    this.id = `garden-${new Date().getTime()}`;
    this.plantingTrays = [];
    this.plants = [];
  }

  public addPlantToGarden({
    plant,
    trayId,
  }: {
    plant: Plant;
    trayId?: string;
  }) {
    this.plants.push(plant);
    if (trayId) {
      const tray = this.getTrayById(trayId);
      tray?.plantSeed(plant);
    }
  }

  public getTrayById(trayId: string) {
    const tray = this.plantingTrays.find((tray) => tray.id === trayId);
    if (tray) return tray;
    else throw new Error(`Unable to find tray with id: ${trayId}`);
  }
}

export class Plant {
  readonly id: string;
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
    this.id = `${cell}-${name.slice(0, 3)}-${datePlanted.getDay()}`;
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

      this.germinationDates = calculateGerminationTimeframe({
        germinationTimeframe,
        datePlanted,
      });
    }
  }
}

export class PlantingTray {
  readonly id: string;
  private plantings: Array<Plant>;

  constructor() {
    this.id = `tray-${new Date().getTime()}`;
    this.plantings = [];
  }

  public getPlantByCell(cell: string): Plant | undefined {
    return this.plantings.find((planting) => planting.cell === cell);
  }

  public getPlantById(id: string): Plant | undefined {
    return this.plantings.find((planting) => planting.id === id);
  }

  private setCellSprouted(cell: string, dateSprouted: Date) {
    const plant = this.getPlantByCell(cell);
    if (plant) plant.dateSprouted = dateSprouted;
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
