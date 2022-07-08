import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders Hello World as a text", () => {
  // Arrange
  render(<Greeting />); // Location to test

  // Act

  // Assert
  const helloWorldElement = screen.getByText("Hello World", { exact: false }); // Get what to test
  expect(helloWorldElement).toBeInTheDocument(); // Test
});
