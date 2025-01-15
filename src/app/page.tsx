// import Image from "next/image";
import styles from "./page.module.css";

class Plant {
  name: string;
  datePlanted: Date;
  cell?: string;
  variant?: string;
  dateSprouted?: Date;
  germinationTimeframe?: {
    start: number;
    end: number;
  };

  constructor({
    name,
    datePlanted,
    cell,
    variant,
  }: {
    name: string;
    datePlanted: Date;
    cell: string;
    variant?: string;
  }) {
    this.name = name;
    this.datePlanted = datePlanted;
    this.cell = cell;
    this.variant = variant;
  }
}

export default function Home() {
  const oregano = new Plant({
    name: "Oregano",
    datePlanted: new Date(2024, 0, 11),
    cell: "1A",
  });

  const rosemary = new Plant({
    name: "Rosemary",
    datePlanted: new Date(2024, 0, 11),
    cell: "1B",
  });

  const basil = new Plant({
    name: "Basil",
    datePlanted: new Date(2024, 0, 11),
    cell: "1C",
  });

  const thyme = new Plant({
    name: "Thyme",
    datePlanted: new Date(2024, 0, 11),
    cell: "1D",
  });

  const pepper = new Plant({
    name: "Bell Pepper",
    datePlanted: new Date(2024, 0, 11),
    cell: "2A",
    variant: "Orange",
  });

  const jalap = new Plant({
    name: "Jalapeño",
    datePlanted: new Date(2024, 0, 11),
    cell: "2B",
    variant: "Black Magic",
  });

  const habanero = new Plant({
    name: "Habanero Pepper",
    datePlanted: new Date(2024, 0, 11),
    cell: "2C",
  });

  const tomato = new Plant({
    name: "Tomato",
    datePlanted: new Date(2024, 0, 11),
    cell: "2D",
    variant: "Yellow Pear",
  });

  const chard = new Plant({
    name: "Rainbow Chard",
    datePlanted: new Date(2024, 0, 11),
    cell: "3A",
  });

  const kale = new Plant({
    name: "Rainbow Kale",
    datePlanted: new Date(2024, 0, 11),
    cell: "3B",
  });

  const lettuce = new Plant({
    name: "Lettuce",
    datePlanted: new Date(2024, 0, 11),
    cell: "3C",
    variant: "Bibb",
  });

  const lettuceb = new Plant({
    name: "Lettuce",
    datePlanted: new Date(2024, 0, 11),
    cell: "3D",
    variant: "Gourmet Leaf",
  });

  const arugula = new Plant({
    name: "Arugula",
    datePlanted: new Date(2024, 0, 11),
    cell: "4A",
  });

  const bean = new Plant({
    name: "Bean",
    datePlanted: new Date(2024, 0, 11),
    cell: "4B",
    variant: "Bush",
  });

  const pac = new Plant({
    name: "Pac Choi",
    datePlanted: new Date(2024, 0, 11),
    cell: "4C",
  });

  const eggplant = new Plant({
    name: "Eggplant",
    datePlanted: new Date(2024, 0, 11),
    cell: "4D",
  });

  const plants = [
    oregano,
    rosemary,
    basil,
    thyme,
    pepper,
    jalap,
    habanero,
    tomato,
    chard,
    kale,
    lettuce,
    lettuceb,
    arugula,
    bean,
    pac,
    eggplant,
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        Welcome to The Garden
        <div className={styles.plantGrid}>
          {plants.map((plant) => (
            <div
              className={styles.plant}
              key={`${plant.name.toString()}${plant.datePlanted.getDate()}${plant.variant?.toString()}`}
            >
              <p>
                {plant.variant?.toString()} {plant.name.toString()}
              </p>
              <p> {plant.datePlanted.toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
