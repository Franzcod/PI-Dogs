import React from "react";
import { render, screen } from "@testing-library/react";
import Create from "./Create";

describe("Create Page", () => {
  it("Label text 'Breed'", () => {
    render(<Create />);
    expect(screen.queryByText(/Breed/i)).toBeInTheDocument();
  });
  it("Label text 'Height Min'", () => {
    render(<Create />);
    expect(screen.queryByText(/Height Min/i)).toBeInTheDocument();
  });
  it("Label text 'Height Max'", () => {
    render(<Create />);
    expect(screen.queryByText(/Height Max/i)).toBeInTheDocument();
  });
  it("Label text 'Weight Min'", () => {
    render(<Create />);
    expect(screen.queryByText(/Weight Min/i)).toBeInTheDocument();
  });
  it("Label text 'Life Span'", () => {
    render(<Create />);
    expect(screen.queryByText(/Life Span/i)).toBeInTheDocument();
  });
});
