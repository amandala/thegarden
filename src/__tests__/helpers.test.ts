import {
  dateInFuture,
  getPrettyDate,
  daysDifference,
  daysBetween,
  isToday,
} from "@/app/lib/helpers";

describe("Helpers", () => {
  describe("dateInFuture", () => {
    it("should return the correct future date", () => {
      const startDate = new Date(2023, 0, 1);
      const result = dateInFuture(startDate, 10);
      expect(result).toEqual(new Date(2023, 0, 11));
    });
  });

  describe("getPrettyDate", () => {
    it("should return the date in 'MMM DD' format", () => {
      const date = new Date(2023, 0, 1);
      const result = getPrettyDate(date);
      expect(result).toBe("Jan 1");
    });
  });

  describe("daysDifference", () => {
    it("should return the correct number of days difference", () => {
      const futureDate = new Date();
      futureDate.setDate(futureDate.getDate() + 10);
      const result = daysDifference(futureDate);
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

  describe("isToday", () => {
    it("should return true if the date is today", () => {
      const today = new Date();
      const result = isToday(today);
      expect(result).toBe(true);
    });

    it("should return false if the date is not today", () => {
      const notToday = new Date(2023, 0, 1);
      const result = isToday(notToday);
      expect(result).toBe(false);
    });
  });
});
