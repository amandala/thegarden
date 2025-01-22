import { sproutEvents } from "@/app/events";
import { getJan11Plants } from "@/app/helpers";
import { NextResponse } from "next/server";

const tray = getJan11Plants();

export async function GET() {
  tray.recordSprouts(sproutEvents);
  return NextResponse.json({ tray });
}
