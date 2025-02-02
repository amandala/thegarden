import { NextResponse } from "next/server";

import { neon } from "@neondatabase/serverless";
import { DbPlant } from "../../types";
import { mapPlantData } from "../../helpers/mapPlantData";
import { selectPlantsWithLocationJoin } from "../../queries";

export async function GET() {
  const sql = neon(`${process.env.DATABASE_URL}`);

  const dbPlants = await sql(selectPlantsWithLocationJoin)
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
