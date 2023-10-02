import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import NavBar from "components/Navbar";

describe("NavBar component", () => {
  beforeEach(() => {
    render(<NavBar />, { wrapper: Router });
  });

  it("opens drawer when menu icon is clicked", () => {
    const menuIcon = screen.getByLabelText("menu");
    fireEvent.click(menuIcon);

    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();
  });

  it("checks if Home tab is clickable", () => {
    const menuIcon = screen.getByLabelText("menu");
    fireEvent.click(menuIcon);

    const kendraServiceLink = screen.getByText("Home");
    expect(kendraServiceLink).toBeInTheDocument();

    fireEvent.click(kendraServiceLink);
  });

  it("checks if AWS Kendra Service tab is clickable", () => {
    const menuIcon = screen.getByLabelText("menu");
    fireEvent.click(menuIcon);

    const kendraServiceLink = screen.getByText("AWS Kendra Service");
    expect(kendraServiceLink).toBeInTheDocument();

    fireEvent.click(kendraServiceLink);
  });

  it("checks if dropdown items under AWS Kendra Service are clickable", () => {
    const menuIcon = screen.getByLabelText("menu");
    fireEvent.click(menuIcon);

    const kendraServiceLink = screen.getByText("AWS Kendra Service");
    fireEvent.click(kendraServiceLink);

    const dropdownItems = ["Documentation", "Onboarding", "Manage Indices"];

    dropdownItems.forEach((item) => {
      const dropdownItem = screen.getByText(item);
      expect(dropdownItem).toBeInTheDocument();
      fireEvent.click(dropdownItem);
    });
  });

  it("checks if AWS Kendra DataSources is clickable", () => {
    const menuIcon = screen.getByLabelText("menu");
    fireEvent.click(menuIcon);

    const kendraServiceLink = screen.getByText("Onboarding");
    expect(kendraServiceLink).toBeInTheDocument();

    fireEvent.click(kendraServiceLink);
  });

  it("checks if dropdown items under AWS Kendra DataSources are clickable", () => {
    const menuIcon = screen.getByLabelText("menu");
    fireEvent.click(menuIcon);

    const kendraServiceLink = screen.getByText("AWS Kendra DataSources");
    fireEvent.click(kendraServiceLink);

    const dropdownItems = [
      "Alfresco",
      "Github",
      "ServiceNow",
      "SharePoint",
      "S3",
    ];

    dropdownItems.forEach((item) => {
      const dropdownItem = screen.getByText(item);
      expect(dropdownItem).toBeInTheDocument();
      fireEvent.click(dropdownItem);
    });
  });
});
