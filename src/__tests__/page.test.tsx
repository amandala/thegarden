import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

describe("Home Page", () => {
  it("renders the greeting", () => {
    render(<Page />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Welcome to Amanda's Garden");
  });

  it("renders a Planting Tray", () => {
    render(<Page />);

    const tray = screen.getByTestId("planting-tray");

    expect(tray).toBeInTheDocument();
  });
});
