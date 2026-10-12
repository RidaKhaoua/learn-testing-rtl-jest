import { render, screen } from "@testing-library/react";
import Skills from "./Skills";
describe("Skills", () => {
  const skills = ["HTML", "CSS", "JAVASCRIPT"];

  test("render correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("render a list of skills", () => {
    render(<Skills skills={skills} />);
    const listElementItem = screen.getAllByRole("listitem");
    expect(listElementItem).toHaveLength(skills.length);
  });

  test("render a login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  test("Start learning button is not rendred", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test("Start learning button is eventually displayed", async() => {
    render(<Skills skills={skills} />);
    const startLarningButton = await screen.findByRole("button", {
      name: "Start Learning"
    },{
        timeout:2000,
    });
    expect(startLarningButton).toBeInTheDocument()
  });
});
