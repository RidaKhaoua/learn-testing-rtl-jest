import { render, screen } from "@testing-library/react";
import Application from "./Application";

describe("Applictions", () => {
  test("render  form's items correctly", () => {
    render(<Application />);
    const jobApplicationElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(jobApplicationElement).toBeInTheDocument();

    const section2Element = screen.getByRole("heading", {
      level: 2,
    });
    expect(section2Element).toBeInTheDocument();

    const imageElement = screen.getByAltText("macbook");
    expect(imageElement).toBeInTheDocument();
    
    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument()
    
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument()

    // const textName = screen.getByText("All field are required");
    const textName = screen.getByText((content) => content.includes("All"));

    expect(textName).toBeInTheDocument();
    
    const nameElement2 = screen.getByLabelText(/name/i, {
      selector: "input",
    });
    expect(nameElement2).toBeInTheDocument();
    
    const nameElement3 = screen.getByPlaceholderText(/fullname/i);
    expect(nameElement3).toBeInTheDocument();
    
    const nameElement4 = screen.getByDisplayValue("reda");
    expect(nameElement4).toBeInTheDocument();

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    const selectTextInputElement = screen.getByRole("textbox", {
      name: /name/i,
    });
    expect(selectTextInputElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: /bio/i,
    });
    expect(bioElement).toBeInTheDocument();
    
    const selectCheckboxElement = screen.getByRole("checkbox");
    expect(selectCheckboxElement).toBeInTheDocument();
    
    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions",
    );
    expect(termsElement2).toBeInTheDocument();
    
    const selectButtonElement = screen.getByRole("button");
    expect(selectButtonElement);
  });
});
