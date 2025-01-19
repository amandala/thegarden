import {
  dateInFuture,
  getPrettyDate,
  daysDifference,
  daysBetween,
} from "../helpers";

describe("dateInFuture", () => {
  it("should return the correct future date", () => {
    const startDate = new Date(2023, 0, 1);
    const daysToAdd = 10;
    const result = dateInFuture(startDate, daysToAdd);
    expect(result).toEqual(new Date(2023, 0, 11));
  });
});

describe("getPrettyDate", () => {
  it("should return the date in 'MMM DD' format", () => {
    const date = new Date(2023, 5, 13);
    const result = getPrettyDate(date);
    expect(result).toBe("Jun 13");
  });
});

describe("daysDifference", () => {
  it("should return the correct number of days difference", () => {
    const date1 = new Date(2023, 0, 1);
    const date2 = new Date(2023, 0, 11);
    const result = daysDifference(date1, date2);
    expect(result).toBe(10);
  });
});

describe("daysBetween", () => {
  it("should return the correct number of days between two dates", () => {
    const date1 = new Date(2023, 0, 1);
    const date2 = new Date(2023, 0, 11);
    const result = daysBetween(date1, date2);
    expect(result).toBe(10);
  });
});
