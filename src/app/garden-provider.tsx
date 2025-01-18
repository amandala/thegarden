"use client";

import { createContext } from "react";
import { getJan11Plants } from "./helpers";
import { PlantingTray } from "./classes";
import { sproutEvents } from "./events";

export const GardenContext = createContext<{
  plantingTray?: PlantingTray;
}>({
  plantingTray: undefined,
});

export default function GardenProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const plantingTray = getJan11Plants();
  plantingTray.recordSprouts(sproutEvents);

  return (
    <GardenContext.Provider value={{ plantingTray: plantingTray }}>
      {children}
    </GardenContext.Provider>
  );
}
