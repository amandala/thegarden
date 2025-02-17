import { TheGarden } from "./components/garden/Garden";
import { SeedStats } from "./components/seeds/SeedStats";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <div>
      <h1 className={styles.Heading}>Welcome to Amanda&apos;s Garden</h1>
      <TheGarden />
      <SeedStats />
    </div>
  );
}
