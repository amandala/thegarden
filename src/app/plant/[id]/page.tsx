import { PlantInfoCard } from "@/app/components/PlantInfoCard";

const PlantPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const paramaters = await params;

  return (
    <div>
      <PlantInfoCard plantId={paramaters.id} />
    </div>
  );
};

export default PlantPage;
