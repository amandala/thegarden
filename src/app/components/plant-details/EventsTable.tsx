import { getPrettyDate } from "@/app/lib/helpers";
import { isLocationBasedEvent, PlantEvent } from "@/app/types";
import styles from "./EventsTable.module.css";

const EventsTable = ({ events }: { events: Array<PlantEvent> }) => {
  return (
    <div className={styles.EventsTable}>
      <div className={styles.Header}>
        <div>Type</div>
        <div>Date</div>
        <div>Location</div>
      </div>
      {events.map((event) => (
        <div className={styles.Row} key={event.id}>
          <div>{event.type}</div>
          <div>{getPrettyDate(event.eventDate)}</div>
          <div>{isLocationBasedEvent(event) ? event.newLocationId : "N/A"}</div>
        </div>
      ))}
    </div>
  );
};

export default EventsTable;
