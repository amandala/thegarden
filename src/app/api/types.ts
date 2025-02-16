import { PlantEventTypes } from "../types";

export interface DbPlant {
  id: number;
  name: string;
  date_planted: string;
  germination_range_start_days: number | null;
  germination_range_end_days: number | null;
  location_type: string;
  location_id: number;
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
  datePlanted: string;
  germinationTimeframe: {
    rangeStartDays: number | null;
    rangeEndDays: number | null;
  };
  location: {
    type: string;
    locationId: number;
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
