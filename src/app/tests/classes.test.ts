import { Plant } from "../classes";
import { dateInFuture, daysBetween } from "../helpers";

describe("Plant class", () => {
  it("should calculate germination timeframe correctly", () => {
    const plant = new Plant({
      name: "Tomato",
      datePlanted: new Date(2023, 0, 1),
      cell: "1A",
      germinationTimeframe: {
        rangeStartDays: 7,
        rangeEndDays: 14,
      },
    });

    const germinationDates = plant.calculateGerminationTimeframe({
      rangeStartDays: 7,
      rangeEndDays: 14,
    });

    expect(germinationDates.startDate).toEqual(
      dateInFuture(new Date(2023, 0, 1), 7)
    );
    expect(germinationDates.endDate).toEqual(
      dateInFuture(new Date(2023, 0, 1), 14)
    );
  });

  it("should calculate days since sprouted correctly", () => {
    const plant = new Plant({
      name: "Tomato",
      datePlanted: new Date(2023, 0, 1),
      cell: "1A",
      dateSprouted: new Date(2023, 0, 10),
    });

    const daysSinceSprouted = plant.daysSinceSprouted();
    expect(daysSinceSprouted).toBe(
      daysBetween(new Date(2023, 0, 10), new Date())
    );
  });

  it("should create a plant with the expected data", () => {
    const plant = new Plant({
      name: "Tomato",
      datePlanted: new Date(2023, 0, 1),
      cell: "1A",
      variant: "Cherry",
      dateSprouted: new Date(2023, 0, 10),
      germinationTimeframe: {
        rangeStartDays: 7,
        rangeEndDays: 14,
      },
    });

    expect(plant.name).toBe("Tomato");
    expect(plant.datePlanted).toEqual(new Date(2023, 0, 1));
    expect(plant.cell).toBe("1A");
    expect(plant.variant).toBe("Cherry");
    expect(plant.dateSprouted).toEqual(new Date(2023, 0, 10));
    expect(plant.germinationTimeframe).toEqual({
      rangeStartDays: 7,
      rangeEndDays: 14,
    });
    expect(plant.location).toBe("tray");
  });
});
