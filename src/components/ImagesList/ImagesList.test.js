import { screen, render } from "@testing-library/react";
import ImagesList from "./ImagesList";
import LogoImage from "assets/images/logo.png";

const images = [
  {
    id: 1,
    description: "First Image",
    urls: { regular: LogoImage, small: LogoImage },
    userInfo: {
      first_name: "John",
      last_name: "Test",
      portfolio_url: "",
    },
  },
  {
    id: 2,
    description: "Second Image",
    urls: { regular: LogoImage, small: LogoImage },
    userInfo: {
      first_name: "Jane",
      last_name: "Test",
      portfolio_url: "",
    },
  },
];

describe("<ImagesList />", () => {
  it("should have two images card", async () => {
    render(<ImagesList images={images} />);

    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });
});
