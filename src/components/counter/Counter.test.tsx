import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  test("render a counter corectly", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();
    const counterButtonElement = screen.getByRole("button", {
      name: /counter/i,
    });
    expect(counterButtonElement).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("render a count of 1 after clicking the increment button", async () => {
    userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Counter",
    });

    await userEvent.click(incrementButton);

    const incrementElement = screen.getByRole("heading");
    expect(incrementElement).toHaveTextContent("1");
  });

  test("render a count of 2 after double clicking the increment button", async () => {
    userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", {
      name: "Counter",
    });
    await userEvent.dblClick(incrementButton);
    const incrementElement = screen.getByRole("heading");
    expect(incrementElement).toHaveTextContent("2");
  });

  test("render a count of 10 after clicking the set button", async () => {
    userEvent.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    await userEvent.type(amountInput, "10");
    expect(amountInput).toHaveValue(10);

    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    await userEvent.click(setButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  test("elements are focused in the right order", async () => {
    userEvent.setup();
    render(<Counter />);
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    const incrementButton = screen.getByRole("button", {
      name: "Counter",
    });
    await userEvent.tab()
    expect(incrementButton).toHaveFocus()
    await userEvent.tab()
    expect(amountInput).toHaveFocus()
    await userEvent.tab()
    expect(setButton).toHaveFocus()
  });
});
