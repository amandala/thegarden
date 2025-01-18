"use client";

import { useContext } from "react";
import { GardenContext } from "../garden-provider";

export const PlantInfoCard = ({ plantId }: { plantId: string }) => {
  const plantingTray = useContext(GardenContext).plantingTray;
  const plant = plantingTray?.getPlantById(plantId);

  console.log(plant);

  return (
    <div>
      <h1>{plant?.name}</h1>
    </div>
  );
};
