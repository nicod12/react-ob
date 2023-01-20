import { useState } from "react";

const useCounter = (initialCount = 0) => {
    const [count, setCount] = useState(initialCount);
    const [steps, setSteps] = useState(1);

    return {
      value: count,
      increment: () => setCount((count === 10) ? count : (count + steps)),
      decrement: () => setCount((count === -10) ? count : (count - steps)),
      reset: () => setCount(0),
      step: () => setSteps((steps === 3) ? 1 : steps + 1)
    };
  };

  export default useCounter;