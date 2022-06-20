import { screen, render, fireEvent } from "@testing-library/react";
import SearchForm from "./SearchForm";

describe("<SearchForm />", () => {
  it("should display the search button and input", async () => {
    render(<SearchForm />);

    expect(
      screen.getByRole("button", {
        name: "Search",
      })
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Search images here...")
    ).toBeInTheDocument();
  });

  it("should update the input value", () => {
    render(<SearchForm />);

    const input = screen.getByPlaceholderText("Search images here...");
    fireEvent.change(input, {
      target: {
        value: "Test Example",
      },
    });
    expect(input).toHaveValue("Test Example");
  });
});
