import { NextResponse } from "next/server";
import plants from "../../../data/plants.json";
import { gardenEvents } from "@/app/events";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const events = gardenEvents.filter((event) => event.plantId === id);

  const plant = plants.find((plant) => plant.id === id);
  return NextResponse.json({ plant, events });
}
