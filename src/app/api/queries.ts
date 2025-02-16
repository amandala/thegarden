export const selectPlants =
  "SELECT p.id, s.name, p.date_planted, s.germination_range_start_days, s.germination_range_end_days, s.variant, l.tray_location_name, l.location_type, l.id as location_id FROM plants p JOIN location l ON p.location_id = l.id JOIN seeds s ON p.seed_id = s.id";

export const selectPlantById = (id: string) =>
  `SELECT p.id, s.name, p.date_planted, s.germination_range_start_days, s.germination_range_end_days, s.variant, l.tray_location_name, l.location_type as location_type, l.id as location_id FROM plants p JOIN location l ON p.location_id = l.id JOIN seeds s ON p.seed_id = s.id WHERE p.id = '${id}';`;

export const selectAllEvents = "SELECT * FROM events ORDER BY event_date ASC";

export const selectEventsByPlantId = (plantId: string) =>
  `SELECT * FROM events WHERE plant_id ='${plantId}' ORDER BY event_date ASC`;
