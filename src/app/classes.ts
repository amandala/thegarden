import { calculateGerminationTimeframe } from "@/app/lib/helpers";

import {
  GerminationTimeframeDates,
  GerminationTimeframeNumDays,
  SproutEvent,
  FailedEvent,
  LocationType,
  TransplantEvent,
  PlantEventTypes,
} from "./types";
import { gardenEvents } from "./events";

export class Garden {
  readonly id: string;
  readonly plantingTray: PlantingTray;
  readonly towerGarden: TowerGarden;
  readonly plants: Array<Plant>;

  constructor({ plants }: { plants: Array<Plant> }) {
    this.id = `garden-${new Date().getTime()}`;

    const plantList: Array<Plant> = [];
    plants.forEach((p) => {
      plantList.push(new Plant(p));
    });

    this.plants = plantList;
    this.recordGardenEvents(gardenEvents);

    const plantsInTray = this.plants.filter(
      (p) => p.location.type === LocationType.TRAY
    );

    const plantsInTower = this.plants.filter(
      (p) => p.location.type === LocationType.TOWER
    );
    console.log("plants in tower", plantsInTower);

    this.plantingTray = new PlantingTray({ plants: plantsInTray });
    this.towerGarden = new TowerGarden({ plants: plantsInTower });
  }

  private recordGardenEvents(
    plantEvents: Array<SproutEvent | FailedEvent | TransplantEvent>
  ) {
    plantEvents.forEach((e) => {
      const plant = this.plants.find((p) => p.id === e.plantId);
      switch (e.type) {
        case PlantEventTypes.SPROUT:
          const sproutEvent = e as SproutEvent;
          plant?.setSprouted(sproutEvent.eventDate);
          break;
        case PlantEventTypes.FAILURE:
          plant?.setFailedToSprout();
          break;
        case PlantEventTypes.TRANSPLANT:
          const transplantEvent = e as TransplantEvent;
          plant?.setMovedToTower(transplantEvent.newLocationId);
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
    type: LocationType;
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
    germinationTimeframe,
    location,
  }: {
    id: string;
    name: string;
    datePlanted: Date;
    location: {
      type: LocationType;
      locationId?: string;
    };
    variant?: string;
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
    // TODO: this is only updating the local object
    this.dateSprouted = new Date(dateSprouted);
  }

  public setFailedToSprout() {
    this.failedToSprout = true;
    // TODO: this is only updating the local object
    this.location = { type: LocationType.GRAVEYARD, locationId: "graveyard" };
  }

  public setMovedToTower(newLocationId: string) {
    console.log("new location id", newLocationId);

    // TODO: Check if newLocationId is a valid key in TowerGarden cells
    this.location = {
      type: LocationType.TOWER,
      locationId: newLocationId,
    };
  }

  public recordPlantEvents(
    plantEvents: Array<SproutEvent | FailedEvent | TransplantEvent>
  ) {
    plantEvents.forEach((e) => {
      switch (e.type) {
        case PlantEventTypes.SPROUT:
          const sproutEvent = e as SproutEvent;
          this.setSprouted(sproutEvent.eventDate);
          break;
        case PlantEventTypes.FAILURE:
          this.setFailedToSprout();
          break;
        case PlantEventTypes.TRANSPLANT:
          const transplantEvent = e as TransplantEvent;
          this.setMovedToTower(transplantEvent.newLocationId);
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

export type TowerGardenCells = Record<
  | "tower_1A"
  | "tower_1B"
  | "tower_1C"
  | "tower_1D"
  | "tower_2A"
  | "tower_2B"
  | "tower_2C"
  | "tower_2D"
  | "tower_3A"
  | "tower_3B"
  | "tower_3C"
  | "tower_3D"
  | "tower_4A"
  | "tower_4B"
  | "tower_4C"
  | "tower_4D"
  | "tower_5A"
  | "tower_5B"
  | "tower_5C"
  | "tower_5D",
  Plant | null
>;

export class TowerGarden {
  readonly id: string;
  cells: TowerGardenCells;

  constructor({ plants }: { plants: Array<Plant> }) {
    this.id = `tray-${new Date().getTime()}`;
    this.cells = {
      tower_5A: null,
      tower_5B: null,
      tower_5C: null,
      tower_5D: null,
      tower_4A: null,
      tower_4B: null,
      tower_4C: null,
      tower_4D: null,
      tower_3A: null,
      tower_3B: null,
      tower_3C: null,
      tower_3D: null,
      tower_2A: null,
      tower_2B: null,
      tower_2C: null,
      tower_2D: null,
      tower_1A: null,
      tower_1B: null,
      tower_1C: null,
      tower_1D: null,
    };

    plants.forEach((p) => {
      if (p.location?.locationId) {
        this.cells[p.location?.locationId as keyof TowerGarden["cells"]] = p;
      }
    });
  }
}
