import { PlantInfoCard } from "@/app/components/plant-details/PlantInfoCard";

import styles from "./styles.module.css";

const PlantPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const paramaters = await params;
  const plantData = await fetch(
    "http://localhost:3000/api/garden/planting-tray"
  ).then((res) => {
    return res.json();
  });

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Card}>
        <PlantInfoCard
          plantId={paramaters.id}
          plantData={plantData.tray.plantings}
        />
      </div>
    </div>
  );
};

export default PlantPage;
