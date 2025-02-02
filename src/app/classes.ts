import { calculateGerminationTimeframe } from "@/app/lib/helpers";

import {
  GerminationTimeframeDates,
  GerminationTimeframeNumDays,
  SproutEvent,
  FailedEvent,
} from "./types";
import { gardenEvents } from "./events";

export class Garden {
  readonly id: string;
  readonly plantingTray: PlantingTray;
  readonly plants: Array<Plant>;

  constructor({ plants }: { plants: Array<Plant> }) {
    this.id = `garden-${new Date().getTime()}`;

    const plantList: Array<Plant> = [];
    plants.forEach((p) => {
      plantList.push(new Plant(p));
    });

    this.plants = plantList;
    this.recordGardenEvents(gardenEvents);

    const plantsInTray = this.plants.filter((p) => p.location.type === "tray");

    this.plantingTray = new PlantingTray({ plants: plantsInTray });
  }

  private recordGardenEvents(plantEvents: Array<SproutEvent | FailedEvent>) {
    plantEvents.forEach((e) => {
      const plant = this.plants.find((p) => p.id === e.plantId);
      switch (e.type) {
        case "sprout":
          const sproutEvent = e as SproutEvent;
          plant?.setSprouted(sproutEvent.dateSprouted);
          break;
        case "failure":
          plant?.setFailedToSprout();
          break;
      }
    });
  }
}

export class Plant {
  readonly id: string;
  readonly name: string;
  datePlanted: Date;
  location: {
    type: "tray" | "graveyard";
    locationId?: string;
  };
  variant?: string;
  dateSprouted?: Date;
  germinationTimeframe?: GerminationTimeframeNumDays;
  germinationDates?: GerminationTimeframeDates;
  failedToSprout?: boolean = false;

  constructor({
    id,
    name,
    datePlanted,
    variant,
    dateSprouted,
    germinationTimeframe,
    location,
  }: {
    id: string;
    name: string;
    datePlanted: Date;
    location: {
      type: "tray" | "graveyard";
      locationId?: string;
    };
    variant?: string;
    dateSprouted?: Date;
    germinationTimeframe?: {
      rangeStartDays: number;
      rangeEndDays: number;
    };
  }) {
    this.id = id;
    this.name = name;
    this.datePlanted = new Date(datePlanted);
    this.location = location;

    this.variant = variant;
    this.dateSprouted = dateSprouted ? new Date(dateSprouted) : undefined;

    if (germinationTimeframe) {
      this.germinationTimeframe = {
        rangeStartDays: germinationTimeframe.rangeStartDays,
        rangeEndDays: germinationTimeframe.rangeEndDays,
      };

      this.germinationDates = calculateGerminationTimeframe({
        germinationTimeframe,
        datePlanted: this.datePlanted,
      });
    }
  }

  public setSprouted(dateSprouted: Date) {
    this.dateSprouted = new Date(dateSprouted);
  }

  public setFailedToSprout() {
    this.failedToSprout = true;
    this.location = { type: "graveyard" };
  }

  public recordPlantEvents(plantEvents: Array<SproutEvent | FailedEvent>) {
    plantEvents.forEach((e) => {
      switch (e.type) {
        case "sprout":
          const sproutEvent = e as SproutEvent;
          this.setSprouted(sproutEvent.dateSprouted);
          break;
        case "failure":
          this.setFailedToSprout();
          break;
      }
    });
  }
}

export type PlantingTrayCells = Record<
  | "tray_1A"
  | "tray_1B"
  | "tray_1C"
  | "tray_1D"
  | "tray_2A"
  | "tray_2B"
  | "tray_2C"
  | "tray_2D"
  | "tray_3A"
  | "tray_3B"
  | "tray_3C"
  | "tray_3D"
  | "tray_4A"
  | "tray_4B"
  | "tray_4C"
  | "tray_4D",
  Plant | null
>;

export class PlantingTray {
  readonly id: string;
  cells: PlantingTrayCells;

  constructor({ plants }: { plants: Array<Plant> }) {
    this.id = `tray-${new Date().getTime()}`;
    this.cells = {
      tray_1A: null,
      tray_1B: null,
      tray_1C: null,
      tray_1D: null,
      tray_2A: null,
      tray_2B: null,
      tray_2C: null,
      tray_2D: null,
      tray_3A: null,
      tray_3B: null,
      tray_3C: null,
      tray_3D: null,
      tray_4A: null,
      tray_4B: null,
      tray_4C: null,
      tray_4D: null,
    };

    plants.forEach((p) => {
      if (p.location?.locationId) {
        this.cells[p.location?.locationId as keyof PlantingTray["cells"]] = p;
      }
    });
  }

  public addPlant(plant: Plant, cell: keyof PlantingTray["cells"]) {
    this.cells[cell] = plant;
  }

  public removePlant(cell: keyof PlantingTray["cells"]) {
    this.cells[cell] = null;
  }

  public getPlants() {
    return this.cells;
  }
}
