"use client";

import cx from "classnames";
import { SeedStat } from "@/app/api/types";
import { fetcher } from "@/app/lib/helpers";
import useSWR from "swr";

import styles from "./SeedStats.module.css";

export const SeedStats = () => {
  const { data, isLoading } = useSWR("../api/garden/seeds/stats", fetcher);

  if (isLoading) return "...loading";
  else
    return (
      <div className={styles.Container}>
        <div className={cx(styles.Row, styles.Bold)}>
          <p>Seed Name</p>
          <p className={styles.End}>Seeded #</p>
          <p className={styles.End}>Sprouted #</p>
          <p className={styles.End}>Failed #</p>
          <p className={styles.End}>Tower #</p>
          <p className={styles.End}>Success %</p>
          <p className={styles.End}>Failure %</p>
        </div>
        {data.stats.map((stat: SeedStat) => (
          <div key={stat.seedId} className={styles.Row}>
            <span>{stat.seedName}</span>
            <span className={styles.End}>{stat.plantedCount}</span>
            <span className={styles.End}>{stat.sproutCount}</span>
            <span className={styles.End}>{stat.failureCount}</span>
            <span className={styles.End}>{stat.towerTransplantCount}</span>
            <span className={styles.End}>{stat.sproutSuccessRate}%</span>
            <span className={styles.End}>{stat.failureRate}%</span>
          </div>
        ))}
      </div>
    );
};
