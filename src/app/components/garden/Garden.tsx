"use client";
import useSWR from "swr";
import { fetcher } from "@/app/lib/helpers";
import { PlantingTray } from "./PlantingTray";
import { Garden } from "@/app/classes";
import { useEffect, useState } from "react";

export const TheGarden = () => {
  const [garden, setGarden] = useState<Garden | null>(null);
  const { data } = useSWR("../api/garden/plants", fetcher);

  useEffect(() => {
    if (data) {
      setGarden(new Garden({ plants: data.plants }));
    }
  }, [data]);

  if (!garden) return <div>Loading...</div>;

  return (
    <div>
      <PlantingTray cells={garden.plantingTrays[0].cells} />
    </div>
  );
};
