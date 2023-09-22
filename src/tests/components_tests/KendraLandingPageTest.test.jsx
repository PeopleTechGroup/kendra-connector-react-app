import React from "react";
import { render, screen } from "@testing-library/react";
import KendraLandingPage from "components/KendraLandingPage";

describe("KendraLandingPage", () => {
  it("renders the components of landing page without errors", () => {
    const { getByText, getByAltText } = render(<KendraLandingPage />);

    // Check if the component renders the title
    const titleElement = getByText("AWS KENDRA");
    expect(titleElement).toBeInTheDocument();

    // Check if the component renders the description
    const descriptionElement = getByText(/AWS Kendra is a highly accurate/i);
    expect(descriptionElement).toBeInTheDocument();

    // Check if the component renders the image
    const imageElement = getByAltText("Image");
    expect(imageElement).toBeInTheDocument();
  });
});
