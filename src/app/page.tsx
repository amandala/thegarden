"use client";

import { PlantingTray } from "@/app/components/planting-tray/PlantingTray";
import styles from "./page.module.css";
import { GardenContext } from "./garden-provider";
import { useContext } from "react";

export default function Home() {
  const plantingTray = useContext(GardenContext).plantingTray;
  return (
    <div>
      <h1 className={styles.Heading}>Welcome to Amanda&apos;s Garden</h1>
      {plantingTray && <PlantingTray trayData={plantingTray} />}
    </div>
  );
}
