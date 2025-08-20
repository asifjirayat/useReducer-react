import { useReducer } from "react";
import Button from "./Button.jsx";
import { counterReducer } from "../store/counterReducer.jsx";

const Counter = () => {
  const [countState, countDispatch] = useReducer(counterReducer, {
    count: 0,
  });

  let countStyles = "text-stone-700";
  if (countState.count > 0) countStyles = "text-green-700";
  if (countState.count < 0) countStyles = "text-red-700";

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-4xl">
        The count is:{" "}
        <span className={`font-bold ${countStyles}`}>{countState.count}</span>
      </p>
      <div className="flex flex-row gap-4 mt-8">
        <Button
          onClick={() => countDispatch({ type: "INCREMENT" })}
          type="increment"
        >
          Increment Count
        </Button>
        <Button
          onClick={() => countDispatch({ type: "DECREMENT" })}
          type="decrement"
        >
          Decrement Count
        </Button>
        <Button onClick={() => countDispatch({ type: "RESET" })} type="reset">
          Reset Count
        </Button>
      </div>
    </div>
  );
};

export default Counter;
