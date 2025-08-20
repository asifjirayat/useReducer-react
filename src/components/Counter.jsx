import { useState } from "react";

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
        <button
          onClick={incrementCount}
          className="p-4 bg-green-100 text-green-700 rounded cursor-pointer"
        >
          Increment Count
        </button>
        <button
          onClick={decrementCount}
          className="p-4 bg-red-100 text-red-700 rounded cursor-pointer"
        >
          Decrement Count
        </button>
        <button
          onClick={resetCount}
          className="p-4 bg-stone-100 text-stone-700 rounded cursor-pointer"
        >
          Reset Count
        </button>
      </div>
    </div>
  );
};

export default Counter;
