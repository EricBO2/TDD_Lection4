import { useState } from "react";

export enum ButtonState {
  IDLE = "idle",
  HOVER = "hover",
  CLICKED = "clicked",
}

type ButtonStateTwo = "idle" | "hover" | "clicked";

interface CustomButtonProps {
  buttonText: string;
}

export function CustomButton(props: CustomButtonProps) {
  const [buttonState, setButtonState] = useState<ButtonState>(ButtonState.IDLE);
  const [ButtonStateTWO, setButtonStateTwo] = useState<ButtonStateTwo>("idle");

  return (
    <input
      type="button"
      value={props.buttonText}
      className={buttonState}
      onMouseLeave={() => setButtonState(ButtonState.IDLE)}
      onMouseEnter={() => {
        setButtonState(ButtonState.HOVER);
      }}
      onClick={() => setButtonState(ButtonState.CLICKED)}
    />
  );
}
