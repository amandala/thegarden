import { PlantInfoCard } from "@/app/components/plant-details/PlantInfoCard";

import styles from "./styles.module.css";

const PlantPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const paramaters = await params;

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Card}>
        <PlantInfoCard plantId={paramaters.id} />
      </div>
    </div>
  );
};

export default PlantPage;
