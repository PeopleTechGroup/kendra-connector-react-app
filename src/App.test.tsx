import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders AWS Kendra Indexes", () => {
  render(
    <MemoryRouter initialEntries={["/kendraIndexes"]}>
      <App />
    </MemoryRouter>,
  );
  const linkElement = screen.getByText(/AWS Kendra Indexes/i);
  expect(linkElement).toBeInTheDocument();
});
