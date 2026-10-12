import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test("render correctly", () => {
    render(<Greet />);
    const text = screen.getByText(/hello/i);
    expect(text).toBeInTheDocument();
  });

  // describe("Nested", () => {
  //   test(" render correctly with  name", () => {
  //     render(<Greet name="reda" />);
  //     const text = screen.getByText(/hello reda/i);
  //     expect(text).toBeInTheDocument();
  //   });
  // });
});
