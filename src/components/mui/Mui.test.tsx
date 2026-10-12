import { render, screen } from "../../test-utils";
import MuiMode from "./MuiMode";
import AppProvders from "../../providers/AppProviders";

describe("Testing Dark Mode", () => {
  test("render dark mode test", () => {
    render(<MuiMode />);
    const darkModeElementText = screen.getByRole("heading");
    expect(darkModeElementText).toHaveTextContent("dark mode");
  });
});
