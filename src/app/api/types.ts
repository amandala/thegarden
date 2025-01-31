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
