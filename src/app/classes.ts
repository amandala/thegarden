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
  | "1A"
  | "1B"
  | "1C"
  | "1D"
  | "2A"
  | "2B"
  | "2C"
  | "2D"
  | "3A"
  | "3B"
  | "3C"
  | "3D"
  | "4A"
  | "4B"
  | "4C"
  | "4D",
  Plant | null
>;

export class PlantingTray {
  readonly id: string;
  cells: PlantingTrayCells;

  constructor({ plants }: { plants: Array<Plant> }) {
    this.id = `tray-${new Date().getTime()}`;
    this.cells = {
      "1A": null,
      "1B": null,
      "1C": null,
      "1D": null,
      "2A": null,
      "2B": null,
      "2C": null,
      "2D": null,
      "3A": null,
      "3B": null,
      "3C": null,
      "3D": null,
      "4A": null,
      "4B": null,
      "4C": null,
      "4D": null,
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
