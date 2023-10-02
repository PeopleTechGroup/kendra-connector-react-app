import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Header from "components/Header.tsx";

describe("<Header />", () => {
  const mockClasses = {
    menuButton: "menuButton",
    grow: "grow",
    search: "search",
    searchIcon: "searchIcon",
    inputRoot: "inputRoot",
    inputInput: "inputInput",
  };

  const mockToggleDrawer = jest.fn();
  const mockHandleSearchChange = jest.fn();

  beforeEach(() => {
    render(
      <Header
        toggleDrawer={mockToggleDrawer}
        classes={mockClasses}
        searchValue=""
        handleSearchChange={mockHandleSearchChange}
      />,
    );
  });

  it("renders without crashing", () => {
    const appBar = screen.getByRole("banner");
    expect(appBar).toBeInTheDocument();
  });

  it("has a menu button", () => {
    const menuButton = screen.getByLabelText("menu");
    expect(menuButton).toBeInTheDocument();
  });

  it("has Kendra Connector Management title", () => {
    const title = screen.getByText("Kendra Connector Management");
    expect(title).toBeInTheDocument();
  });

  it("has a search input", () => {
    const searchInput = screen.getByLabelText("search");
    expect(searchInput).toBeInTheDocument();
  });

  it("calls the toggle drawer function when menu button is clicked", () => {
    const menuButton = screen.getByLabelText("menu");
    fireEvent.click(menuButton);
    expect(mockToggleDrawer).toHaveBeenCalledWith(true);
  });

  it("calls handleSearchChange when search input is changed", () => {
    const searchInput = screen.getByLabelText("search");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(mockHandleSearchChange).toHaveBeenCalled();
  });
});
