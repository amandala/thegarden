import { PlantingTray } from "@/app/components/planting-tray/PlantingTray";
import styles from "./page.module.css";

import { headers } from "next/headers";

export default async function Home() {
  const headerList = await headers();

  const path = await headerList.get("referer");

  const data = await fetch(`${path}/api/garden/planting-tray`).then((res) => {
    return res.json();
  });

  return (
    <div>
      <h1 className={styles.Heading}>Welcome to Amanda&apos;s Garden</h1>
      {data.tray && <PlantingTray trayData={data.tray.plantings} />}
    </div>
  );
}
