import { PlantInfoCard } from "@/app/components/plant-details/PlantInfoCard";

import styles from "./styles.module.css";
import { headers } from "next/headers";

const PlantPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const paramaters = await params;
  const headerList = await headers();
  const path = await headerList.get("referer");

  let data;
  if (
    path === "http://localhost:3000/" ||
    path === "https://amandasgarden.com/"
  ) {
    data = await fetch(`${path}api/garden/planting-tray`).then((res) => {
      return res.json();
    });
  }

  if (!data) return null;

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Card}>
        <PlantInfoCard
          plantId={paramaters.id}
          plantData={data.tray.plantings}
        />
      </div>
    </div>
  );
};

export default PlantPage;
