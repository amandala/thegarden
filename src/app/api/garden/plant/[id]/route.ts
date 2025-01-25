import { getJan11Plants } from "@/app/lib/helpers";
import { NextResponse } from "next/server";

const tray = getJan11Plants();

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  const plant = tray.getPlantById(id);
  return NextResponse.json({ plant });
}
