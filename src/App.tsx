import "./styles.css";
import { useState } from "react";
import { Button } from "./Button";

export const App = () => {
  const [step, setStep] = useState(1);
  const [counterValue, setCounterValue] = useState(0);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = parseInt(e.target.value);
    setStep(selectedValue);
  };

  return (
    <div className="App">
      <div>Counter value {counterValue}</div>
      <span>Step</span>
      <input
        value={step}
        type="range"
        min="1"
        max="10"
        onChange={onChangeHandler}
      />
      <span>{step}</span>
      <br />
      <Button
        counterValue={counterValue}
        setCounterValue={setCounterValue}
        step={step}
        click={"+"}
      ></Button>
      <Button
        counterValue={counterValue}
        setCounterValue={setCounterValue}
        step={step}
        click={"-"}
      ></Button>
    </div>
  );
};
