import { screen, render } from "@testing-library/react";
import ImageCard from "./ImageCard";
import LogoImage from "assets/images/logo.png";

const mockCardValue = {
  id: 1,
  description: "First Image",
  urls: { regular: LogoImage, small: LogoImage },
  userInfo: {
    first_name: "John",
    last_name: "Test",
    portfolio_url: "https://johntest.com",
  },
};

describe("<ImageCard />", () => {
  it("should display image info in the Card", () => {
    render(<ImageCard {...mockCardValue} />);

    const linkEl = screen.getByRole("link", { name: "John Test" });
    const linkUnsplash = screen.getByRole("link", { name: "Unsplash" });

    expect(screen.getByAltText("First Image")).toBeInTheDocument();

    expect(screen.getByText("John Test")).toBeInTheDocument();
    expect(linkEl).toHaveAttribute("href", "https://johntest.com");

    expect(screen.getByText("Unsplash")).toBeInTheDocument();
    expect(linkUnsplash).toHaveAttribute("href", "https://unsplash.com");

    expect(screen.getByRole("heading")).toHaveTextContent(/Photo by/);
    expect(linkEl).toBeInTheDocument();
  });
});
