import { PlantingTray } from "@/app/components/planting-tray/PlantingTray";
import styles from "./page.module.css";

export default async function Home() {
  const data = await fetch(
    "http://localhost:3000/api/garden/planting-tray"
  ).then((res) => {
    return res.json();
  });

  return (
    <div>
      <h1 className={styles.Heading}>Welcome to Amanda&apos;s Garden</h1>
      {data.tray && <PlantingTray trayData={data.tray.plantings} />}
    </div>
  );
}
