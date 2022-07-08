import { render, screen } from "@testing-library/react";
import App from "./App";

// test function => npm test
test("renders learn react link", () => {
  render(<App />); // Location to test
  const linkElement = screen.getByText(/learn react/i); // get /text/ (i) => not case sensitive
  expect(linkElement).toBeInTheDocument(); // fint (/text/i)
});
