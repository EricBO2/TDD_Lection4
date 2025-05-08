import { CustomButton, ButtonState } from "./CustomButton";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";

// DisplayName() JUNIT = Collection of Test
describe("Easy Examples", () => {
  //Test #1
  test("2 + 2 = 4", () => {
    expect(2 + 2).toBe(4);
  });
  //Test #2
  test("is 2+4 greater than 0", () => {
    expect(2 + 4).toBeGreaterThan(0);
  });

  //Test #3
  test("2-2 equals 0", () => {
    expect(2 - 2).toBe(0);
  });
});

describe("Custom Button Component States", () => {
  //Idle
  test("Check if Button Component starts whit Idle", () => {
    const buttonText: string = "signup";
    const { getByText } = render(<CustomButton buttonText={buttonText} />);
    const CustomButtonComponent = getByText(buttonText);

    expect(CustomButtonComponent).toHaveClass(ButtonState.IDLE);
  });
  //Hover
  test("Check if Button Component on hover state changes", () => {
    const buttonText: string = "signup";
    const { getByText } = render(<CustomButton buttonText={buttonText} />);
    const CustomButtonComponent = getByText(buttonText);

    expect(CustomButtonComponent).toHaveClass(ButtonState.IDLE);
    fireEvent.mouseEnter(CustomButtonComponent);
    expect(CustomButtonComponent).toHaveClass(ButtonState.HOVER);
  });
  //Clicked
  test("", () => {
    const buttonText: string = "signup";
    const { getByText } = render(<CustomButton buttonText={buttonText} />);
    const CustomButtonComponent = getByText(buttonText);

    expect(CustomButtonComponent).toHaveClass(ButtonState.IDLE);
    fireEvent.click(CustomButtonComponent);
    expect(CustomButtonComponent).toHaveClass(ButtonState.CLICKED);
  });

  test("This test sould fail for my Github Action Training", () => {
    expect(2 + 2).toBe(9999);
  });
});
