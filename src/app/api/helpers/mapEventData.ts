import { DBEvent, EventData } from "../types";

export const mapEventData = (dbEvents: DBEvent[]): EventData[] => {
  return dbEvents.map((event) => {
    return {
      id: event.id,
      plantId: event.plant_id,
      eventDate: new Date(event.event_date),
      newLocationId: event.new_location_id,
      type: event.event_type,
    };
  });
};
