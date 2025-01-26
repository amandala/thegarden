import { NextResponse } from "next/server";

import plants from "../../data/plants.json";

export async function GET() {
  return NextResponse.json({ plants });
}
