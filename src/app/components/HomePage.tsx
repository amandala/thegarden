import { PlantingTray } from "@/app/components/PlantingTray";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <h1 className={styles.Heading}>Welcome to Amanda&apos;s Garden</h1>
      <PlantingTray />
    </div>
  );
};

export default HomePage;
