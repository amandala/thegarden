export const selectPlants =
  "SELECT p.id, s.name, s.germination_range_start_days, s.germination_range_end_days, s.variant FROM plants p JOIN seeds s ON p.seed_id = s.id";

export const selectPlantById = (id: string) =>
  `SELECT p.id, s.name, s.germination_range_start_days, s.germination_range_end_days, s.variant FROM plants p JOIN seeds s ON p.seed_id = s.id WHERE p.id = '${id}';`;

export const selectAllEvents = "SELECT * FROM events ORDER BY event_date ASC";

export const selectEventsByPlantId = (plantId: string) =>
  `SELECT * FROM events WHERE plant_id ='${plantId}' ORDER BY event_date ASC`;
