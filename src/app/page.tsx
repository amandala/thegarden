import { PlantingTray } from "@/app/components/planting-tray/PlantingTray";
import styles from "./page.module.css";

import { headers } from "next/headers";

export default async function Home() {
  const headerList = await headers();

  const path = await headerList.get("referer");
  console.log(path);

  let data;
  if (
    path === "http://localhost:3000/" ||
    path === "https://www.amandasgarden.com/"
  ) {
    data = await fetch(`${path}api/garden/planting-tray`).then((res) => {
      return res.json();
    });
  }

  if (!data) return null;

  return (
    <div>
      <h1 className={styles.Heading}>Welcome to Amanda&apos;s Garden</h1>
      {data.tray && <PlantingTray trayData={data.tray.plantings} />}
    </div>
  );
}
