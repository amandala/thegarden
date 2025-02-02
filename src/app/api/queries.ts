export const selectPlantsWithLocationJoin =
  "SELECT p.id, p.name, p.date_planted, p.germination_range_start_days, p.germination_range_end_days, p.variant, l.tray_location_name, l.location_type as location_type, l.id as location_id FROM plants p JOIN location l ON p.location_id = l.id";

export const selectPlantWithLocationJoin = (id: string) =>
  `SELECT p.id, p.name, p.date_planted, p.germination_range_start_days, p.germination_range_end_days, p.variant, l.tray_location_name, l.location_type as location_type, l.id as location_id FROM plants p JOIN location l ON p.location_id = l.id WHERE p.id = '${id}';`;
