import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("App", () => {
  test("renders AppBar with correct text", () => {
    render(<App />);
    const linkElement = screen.getByText(/Huddo Boards Services/i);
    expect(linkElement).toBeInTheDocument();
  });
});
