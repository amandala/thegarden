export const selectAllPlants =
  "SELECT p.id, s.name, s.germination_range_start_days, s.germination_range_end_days, s.variant FROM plants p JOIN seeds s ON p.seed_id = s.id";

export const selectPlantById = (id: string) =>
  `SELECT p.id, s.name, s.germination_range_start_days, s.germination_range_end_days, s.variant FROM plants p JOIN seeds s ON p.seed_id = s.id WHERE p.id = '${id}';`;

export const selectAllEvents = "SELECT * FROM events ORDER BY event_date ASC";

export const selectEventsByPlantId = (plantId: string) =>
  `SELECT * FROM events WHERE plant_id ='${plantId}' ORDER BY event_date ASC`;

export const getSeedStats = `
  SELECT 
    s.id AS seed_id,
    s.name AS seed_name,
    COUNT(DISTINCT CASE WHEN e.event_type = 'seed' THEN e.plant_id END) AS planted_count,
    COUNT(DISTINCT CASE WHEN e.event_type = 'failure' THEN e.plant_id END) AS failure_count,
    COUNT(DISTINCT CASE WHEN e.event_type = 'sprout' THEN e.plant_id END) AS sprout_count,
    COUNT(DISTINCT CASE WHEN e.event_type = 'transplant' AND l.location_type = 'tower' THEN e.plant_id END) AS tower_transplant_count,
    ROUND(COUNT(DISTINCT CASE WHEN e.event_type = 'sprout' THEN e.plant_id END)::numeric / NULLIF(COUNT(DISTINCT CASE WHEN e.event_type = 'seed' THEN e.plant_id END), 0) * 100, 2) AS sprout_success_rate,
    ROUND(COUNT(DISTINCT CASE WHEN e.event_type = 'failure' THEN e.plant_id END)::numeric / NULLIF(COUNT(DISTINCT CASE WHEN e.event_type = 'seed' THEN e.plant_id END), 0) * 100, 2) AS failure_rate
FROM 
    seeds s
LEFT JOIN 
    plants p ON s.id = p.seed_id
LEFT JOIN 
    events e ON p.id = e.plant_id
LEFT JOIN 
    location l ON e.new_location_id = l.id
GROUP BY 
    s.id, s.name
ORDER BY 
    seed_name;`;
