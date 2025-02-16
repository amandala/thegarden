import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { DBEvent, DbPlant } from "@/app/api/types";
import { mapPlantData } from "@/app/api/helpers/mapPlantData";
import { selectEventsByPlantId, selectPlantById } from "@/app/api/queries";
import { mapEventData } from "@/app/api/helpers/mapEventData";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  const sql = neon(`${process.env.DATABASE_URL}`);

  const dbPlants = await sql(selectPlantById(id))
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

  const dbEvents = await sql(selectEventsByPlantId(id))
    .then(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (data: Record<string, any>[]) => {
        console.log("Events loaded");

        return data as DBEvent[];
      }
    )
    .catch((error) => {
      console.error("Error fetching events", error);
      return [];
    });

  const plant = mapPlantData(dbPlants)[0];
  const events = mapEventData(dbEvents);

  return NextResponse.json({ plant, events });
}
