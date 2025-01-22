import { sproutEvents } from "@/app/events";
import { getJan11Plants } from "@/app/helpers";
import { NextResponse } from "next/server";

const tray = getJan11Plants();
tray.recordSprouts(sproutEvents);

export async function GET() {
  return NextResponse.json({ tray });
}
