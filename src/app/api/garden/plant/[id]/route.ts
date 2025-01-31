import { NextResponse } from "next/server";
import { gardenEvents } from "@/app/events";
import { neon } from "@neondatabase/serverless";
import { DbPlant } from "@/app/api/types";
import { mapPlantData } from "@/app/api/helpers/mapPlantData";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const events = gardenEvents.filter((event) => event.plantId === id);

  const sql = neon(`${process.env.DATABASE_URL}`);

  const dbPlants = await sql(
    `SELECT * FROM plants as plant WHERE plant.id = '${id}'`
  )
    .then(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (data: Record<string, any>[]) => {
        console.log("Plant loaded", data);
        return data as DbPlant[];
      }
    )
    .catch((error) => {
      console.error("Error fetching plants", error);
      return [];
    });

  const plant = mapPlantData(dbPlants)[0];

  return NextResponse.json({ plant, events });
}
