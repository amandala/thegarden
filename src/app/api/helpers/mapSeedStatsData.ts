import { DbSeedStat, SeedStat } from "../types";

export const mapSeedStatsData = (dbEvents: DbSeedStat[]): SeedStat[] => {
  return dbEvents.map((event) => {
    return {
      seedId: event.seed_id,
      seedName: event.seed_name,
      plantedCount: event.planted_count,
      sproutCount: event.sprout_count,
      failureCount: event.failure_count,
      towerTransplantCount: event.tower_transplant_count,
      sproutSuccessRate: ~~event.sprout_success_rate,
      failureRate: ~~event.failure_rate,
    };
  });
};
