import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    // Creating DUMMY function (Mock) To avoid sending HTTP for testing
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });

    // Test location
    render(<Async />);

    // To do before Test (Optional)

    // Select Data & Test
    const listItemElements = await screen.findAllByRole("listitem"); // Get all "listitems"
    expect(listItemElements).not.toHaveLength(0); // Test if "listitems" length !== 0
  });
});
