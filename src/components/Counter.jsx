import { useState } from "react";

export const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);

  function increamentCounter() {
    setCounterValue(counterValue + 1);
  }
  function decreamentCounter() {
    if (counterValue > 0) return setCounterValue(counterValue - 1);
    return 0;
  }

  return (
    <div>
      <h2>Counter</h2>
      <p>{counterValue}</p>
      <p>
        <button type="button" onClick={increamentCounter}>
          Increment
        </button>
      </p>
      <p>
        <button type="button" onClick={decreamentCounter}>
          Decrement
        </button>
      </p>
    </div>
  );
};
