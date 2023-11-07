import React from "react";
import { render, screen } from "@testing-library/react";
import ServiceList from "../ServiceList";
import useFetch from "./../../hooks/useFetch";

jest.mock("./../../hooks/useFetch", () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockServices = [
  { name: "user-service", version: "1.0.0" },
  { name: "provider-service", version: "2.0.0" },
];

describe("ServiceList", () => {
  it("displays loading indicator when fetching data", () => {
    (useFetch as jest.Mock).mockReturnValue({
      isLoading: true,
      data: null,
      error: null,
    });
    render(<ServiceList />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("displays an error message when there is an error", () => {
    (useFetch as jest.Mock).mockReturnValue({
      isLoading: false,
      data: null,
      error: "Error fetching services",
    });
    render(<ServiceList />);
    expect(screen.getByText(/Error fetching services/i)).toBeInTheDocument();
  });

  it("renders the list of services correctly", () => {
    (useFetch as jest.Mock).mockReturnValue({
      isLoading: false,
      data: mockServices,
      error: null,
    });
    render(<ServiceList />);
    expect(screen.getByText("user-service")).toBeInTheDocument();
    expect(screen.getByText("provider-service")).toBeInTheDocument();
  });
});
