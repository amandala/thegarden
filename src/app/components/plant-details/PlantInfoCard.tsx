"use client";

import cx from "classnames";

import styles from "./PlantInfoCard.module.css";
import {
  GerminationDates,
  GerminationNumDays,
  PlantAge,
  PlantedDate,
  PlantLocation,
  SproutedDays,
  SproutedOn,
} from "../shared/PlantInfoLines";
import GrowingSeedling from "../animations/GrowingSeedling";
import { daysSinceSprouted, fetcher } from "@/app/lib/helpers";
import useSWR from "swr";
import Tombstone from "@/app/components/animations/Tombstone";
import { useEffect, useState } from "react";
import { Plant } from "@/app/classes";
import { PlantEvent } from "@/app/types";
import EventsTable from "./EventsTable";

export const PlantInfoCard = ({ id }: { id: string }) => {
  const [plant, setPlant] = useState<Plant | null>(null);
  const [events, setEvents] = useState<Array<PlantEvent>>([]);
  const { data } = useSWR(`../api/garden/plant/${id}`, fetcher, {});

  useEffect(() => {
    if (data) {
      const plant = new Plant(data.plant);
      plant.recordPlantEvents(data.events);
      setPlant(plant);
      setEvents(data.events);
    }
  }, [data]);

  if (plant)
    return (
      <div
        className={cx(styles.PlantInfo, {
          [styles.Sprouted]: plant.dateSprouted,
        })}
      >
        <h1>
          {plant.variant} {plant.name}
        </h1>
        {plant.location && plant.datePlanted ? (
          <div className={styles.Section}>
            <h4>Planting Info</h4>
            <PlantedDate date={plant.datePlanted} />
            <PlantLocation location={plant.location} />
          </div>
        ) : null}
        <div className={styles.Section}>
          <h4>Germination Info</h4>
          {plant.dateSprouted && plant.datePlanted ? (
            <SproutedDays
              planted={plant.datePlanted}
              sprouted={plant.dateSprouted}
            />
          ) : null}
          {plant.germinationDates && !plant.dateSprouted && (
            <GerminationDates
              germDates={plant.germinationDates}
              failedToSprout={plant.failedToSprout}
            />
          )}
          {!!plant.germinationTimeframe?.rangeStartDays && (
            <GerminationNumDays germDays={plant.germinationTimeframe} />
          )}
          {plant.dateSprouted && (
            <PlantAge daysAlive={daysSinceSprouted(plant.dateSprouted)} />
          )}
          {plant.dateSprouted && (
            <SproutedOn dateSprouted={plant.dateSprouted} />
          )}
        </div>
        <div className={styles.Section}>
          <h4>Event Ledger</h4>
          <EventsTable events={events} />
        </div>
        {plant.dateSprouted && <GrowingSeedling />}
        {plant.failedToSprout && <Tombstone />}
      </div>
    );
};
