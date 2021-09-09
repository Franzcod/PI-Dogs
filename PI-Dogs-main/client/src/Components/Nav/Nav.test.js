import React from "react";
import { render, screen } from "@testing-library/react";
import Nav from "./Nav";

xdescribe("Init Page", () => {
  it("Nav", () => {
    render(<Nav />);
    expect(screen.queryByText(/2021/i)).toBeInTheDocument();
  });
});
