import { PlantEventTypes } from "../types";

export interface DbPlant {
  id: number;
  name: string;
  germination_range_start_days: number | null;
  germination_range_end_days: number | null;
  variant: string | null;
}

export interface DBEvent {
  id: string;
  plant_id: string;
  event_type: PlantEventTypes;
  event_date: string;
  event_message?: string;
  new_location_id?: string;
}

export interface PlantData {
  id: number;
  name: string;
  germinationTimeframe: {
    rangeStartDays: number | null;
    rangeEndDays: number | null;
  };
  variant: string | null;
}

export interface EventData {
  id: string;
  plantId: string;
  eventDate: Date;
  newLocationId?: string;
  //TODO: type type :P
  type: string;
}

export interface DbSeedStat {
  seed_id: string;
  seed_name: string;
  planted_count: number;
  failure_count: number;
  tower_transplant_count: number;
  success_rate: number;
  failure_rate: number;
}

export interface SeedStat {
  seedId: string;
  seedName: string;
  plantedCount: number;
  failureCount: number;
  towerTransplantCount: number;
  successRate: number;
  failureRate: number;
}
