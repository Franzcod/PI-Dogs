import React from "react";
import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About Page", () => {
  it("About title in box", () => {
    render(<About />);
    expect(screen.queryByText(/Dogcity App/i)).toBeInTheDocument();
  });
  it("About text in box", () => {
    render(<About />);
    expect(
      screen.queryByText(
        /Proyecto creado por Francisco Palacios , para el proyecto individual de Henry./i
      )
    ).toBeInTheDocument();
  });
});
