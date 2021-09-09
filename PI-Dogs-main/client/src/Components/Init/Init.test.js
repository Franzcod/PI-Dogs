import React from "react";
import { render, screen } from "@testing-library/react";
import Init from "./Init";

xdescribe("Init Page", () => {
  it("titulo", () => {
    render(<Init />);
    expect(screen.queryByText(/iniciar/i)).toBeInTheDocument();
  });
});
