import { mapSeedStatsData } from "@/app/api/helpers/mapSeedStatsData";
import { getSeedStats } from "@/app/api/queries";
import { DbSeedStat } from "@/app/api/types";
import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

export async function GET() {
  const sql = neon(`${process.env.DATABASE_URL}`);

  const dbSeeds = await sql(getSeedStats).then(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (data: Record<string, any>[]) => {
      console.log("Seed stats loaded");

      return data as DbSeedStat[];
    }
  );

  return NextResponse.json({ stats: mapSeedStatsData(dbSeeds) });
}
