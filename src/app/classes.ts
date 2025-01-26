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
  readonly plantingTrays: Array<PlantingTray>;
  readonly plants: Array<Plant>;

  constructor({ plants }: { plants: Array<Plant> }) {
    this.id = `garden-${new Date().getTime()}`;
    this.plantingTrays = [];

    const plantList: Array<Plant> = [];
    plants.forEach((p) => {
      plantList.push(new Plant(p));
    });

    this.plants = plantList;

    this.recordGardenEvents(gardenEvents);
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
    this.datePlanted = datePlanted;
    this.location = location;

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

  public setSprouted(dateSprouted: Date) {
    this.dateSprouted = dateSprouted;
  }

  public setFailedToSprout() {
    this.failedToSprout = true;
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

export class PlantingTray {
  readonly id: string;
  plantings: Array<Plant>;

  constructor() {
    this.id = `tray-${new Date().getTime()}`;
    this.plantings = [];
  }

  public plantSeed(plant: Plant) {
    this.plantings.push(plant);
  }

  public getPlants() {
    return this.plantings;
  }
}
