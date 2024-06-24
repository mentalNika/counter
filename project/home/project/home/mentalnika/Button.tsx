import React from "react";

interface ButtonProps {
  counterValue: number;
  setCounterValue: React.Dispatch<React.SetStateAction<number>>;
  click: string;
  step: number;
}

export const Button: React.FC<ButtonProps> = ({
  counterValue,
  setCounterValue,
  click,
  step,
}) => {
  const handleClick = () => {
    if (click === "+") {
      setCounterValue(counterValue + step);
    } else if (click === "-") {
      setCounterValue(counterValue - step);
    }
  };

  return (
    <button onClick={handleClick}>
      {click === "+" ? <p>Increment</p> : <p>Decrement</p>}
    </button>
  );
};
