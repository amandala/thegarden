import { DbPlant, PlantData } from "../types";

export const mapPlantData = (dbPlants: DbPlant[]): PlantData[] => {
  return dbPlants.map((plant) => {
    return {
      id: plant.id,
      name: plant.name,
      datePlanted: plant.date_planted,
      germinationTimeframe: {
        rangeStartDays: plant.germination_range_start_days || null,
        rangeEndDays: plant.germination_range_end_days || null,
      },
      location: {
        type: plant.location_type,
        locationId: plant.location_id,
      },
      variant: plant.variant,
    };
  });
};
