import { Plant } from "@/app/classes";
import Tombstone from "../animations/Tombstone";

import styles from "./Graveyard.module.css";
import Link from "next/link";

export const Graveyard = ({ plants }: { plants: Array<Plant> }) => {
  return (
    <div className={styles.Graveyard}>
      {plants.map((plant) => (
        <Link key={plant.id} href={`/plant/${plant.id}`}>
          <div className={styles.Grave}>
            <Tombstone />
          </div>
        </Link>
      ))}
      <div className={styles.GraveyardGround}></div>
    </div>
  );
};
