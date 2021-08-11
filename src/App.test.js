import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  const linkElement = screen.getByRole("link", { name: /learn react/i });
  expect(linkElement).toBeInTheDocument();

  // checking button initial color

test("button has correct initial color", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: "change to blue" });
  expect(buttonElement).toHaveStyle({ backgroundColor: "red" });

  // on click button color should be blue
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
  expect(buttonElement.textContent).toBe("change to red");
});
