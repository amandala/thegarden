import { getJan11Plants } from "@/app/lib/helpers";
import { NextResponse } from "next/server";

const tray = getJan11Plants();

export async function GET() {
  return NextResponse.json({ tray });
}
