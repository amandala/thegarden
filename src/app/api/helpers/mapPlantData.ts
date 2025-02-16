import { DbPlant, PlantData } from "../types";

export const mapPlantData = (dbPlants: DbPlant[]): PlantData[] => {
  return dbPlants.map((plant) => {
    return {
      id: plant.id,
      name: plant.name,
      germinationTimeframe: {
        rangeStartDays: plant.germination_range_start_days || null,
        rangeEndDays: plant.germination_range_end_days || null,
      },
      variant: plant.variant,
    };
  });
};
