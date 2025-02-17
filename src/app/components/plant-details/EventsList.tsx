import { getPrettyDate } from "@/app/lib/helpers";
import { PlantEvent, PlantEventTypes } from "@/app/types";

import styles from "./EventsList.module.css";

const generateLedgerLine = (event: PlantEvent) => {
  switch (event.type) {
    case PlantEventTypes.SEED:
      return (
        <p>{`Seeded in ${event.newLocationId.replace(
          "_",
          " "
        )} on ${getPrettyDate(event.eventDate)}`}</p>
      );
    case PlantEventTypes.SPROUT:
      return <p>{`Sprouted on ${getPrettyDate(event.eventDate)}`}</p>;
    case PlantEventTypes.TRANSPLANT:
      return (
        <p>{`Moved to ${event.newLocationId.replace(
          "_",
          " "
        )} on ${getPrettyDate(event.eventDate)}`}</p>
      );
    case PlantEventTypes.FAILURE:
      return (
        <p>{`Moved to ${event.newLocationId.replace(
          "_",
          " "
        )} on ${getPrettyDate(event.eventDate)}`}</p>
      );
    default:
      return <></>;
  }
};

const EventsList = ({ events }: { events: Array<PlantEvent> }) => {
  return (
    <div className={styles.MoonDance}>
      {events.map((event) => generateLedgerLine(event))}
    </div>
  );
};

export default EventsList;
