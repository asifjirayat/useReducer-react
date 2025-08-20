import { useState } from "react";
import Button from "./Button.jsx";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  let countStyles = "text-stone-700";
  if (count > 0) countStyles = "text-green-700";
  if (count < 0) countStyles = "text-red-700";

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-4xl">
        The count is:{" "}
        <span className={`font-bold ${countStyles}`}>{count}</span>
      </p>
      <div className="flex flex-row gap-4 mt-8">
        <Button onClick={incrementCount} type="increment">
          Increment Count
        </Button>
        <Button onClick={decrementCount} type="decrement">
          Decrement Count
        </Button>
        <Button onClick={resetCount} type="reset">
          Reset Count
        </Button>
      </div>
    </div>
  );
};

export default Counter;
