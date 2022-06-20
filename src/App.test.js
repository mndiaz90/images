import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import getImages from "services/getImages";
import App from "./App";
import LogoImage from "./assets/images/logo.png";
import "../mocks/intersectionObserverMock";

jest.mock("services/getImages");
const mockResp = [
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

describe("<App />", () => {
  beforeEach(() => {
    getImages.mockResolvedValue(mockResp);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call api images one time when render the first time", async () => {
    render(<App />);

    await waitFor(() => {
      expect(getImages).toHaveBeenCalledTimes(1);
    });
  });

  it("should call the api when search the word Test", async () => {
    render(<App />);

    const input = await screen.findByRole("textbox");
    const button = await screen.findByRole("button");

    fireEvent.change(input, { target: { value: "Test" } });
    fireEvent.click(button);

    const word = await screen.findByText("Test");

    expect(getImages).toHaveBeenCalledWith({ keyword: "Test" });
    expect(word).toBeVisible();
  });
});
