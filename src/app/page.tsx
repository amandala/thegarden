import { PlantingTray } from "@/app/components/planting-tray/PlantingTray";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.Heading}>Welcome to Amanda&apos;s Garden</h1>
      <PlantingTray />
    </div>
  );
}
