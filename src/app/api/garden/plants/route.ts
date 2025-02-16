import { NextResponse } from "next/server";

import { neon } from "@neondatabase/serverless";
import { DBEvent, DbPlant } from "../../types";
import { mapPlantData } from "../../helpers/mapPlantData";
import { selectAllEvents, selectPlants } from "../../queries";
import { mapEventData } from "../../helpers/mapEventData";

export async function GET() {
  const sql = neon(`${process.env.DATABASE_URL}`);

  const dbPlants = await sql(selectPlants)
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

  const dbEvents = await sql(selectAllEvents)
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

  const events = mapEventData(dbEvents);
  const plants = mapPlantData(dbPlants);

  return NextResponse.json({ plants, events });
}
