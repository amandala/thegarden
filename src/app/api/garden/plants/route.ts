import { NextResponse } from "next/server";

import { neon } from "@neondatabase/serverless";

interface DbPlant {
  id: number;
  name: string;
  date_planted: string;
  germination_range_start_days: number | null;
  germination_range_end_days: number | null;
  location_type: string;
  location_id: number;
  variant: string | null;
}

interface PlantData {
  id: number;
  name: string;
  datePlanted: string;
  germinationTimeframe: {
    rangeStartDays: number | null;
    rangeEndDays: number | null;
  };
  location: {
    type: string;
    locationId: number;
  };
  variant: string | null;
}

const mapPlantData = (dbPlants: DbPlant[]): PlantData[] => {
  return dbPlants.map((plant) => {
    return {
      id: plant.id,
      name: plant.name,
      datePlanted: plant.date_planted,
      germinationTimeframe: {
        rangeStartDays: plant.germination_range_start_days || null,
        rangeEndDays: plant.germination_range_end_days || null,
      },
      location: {
        type: plant.location_type,
        locationId: plant.location_id,
      },
      variant: plant.variant,
    };
  });
};

export async function GET() {
  const sql = neon(`${process.env.DATABASE_URL}`);

  const dbPlants = await sql("SELECT * FROM plants")
    .then(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (data: Record<string, any>[]) => {
        console.log("Plants loaded");
        return data as DbPlant[];
      }
    )
    .catch((error) => {
      console.error("Error fetching plants", error);
      return [];
    });

  const plants = mapPlantData(dbPlants);

  return NextResponse.json({ plants });
}
