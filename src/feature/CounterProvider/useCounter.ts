import { useState } from "react";

export const useCounter = (initialNum: number = 0) => {
  const [count, setCount] = useState(initialNum);

  const increment = (num: number = 1) => {
    setCount(count + num);
  };

  return { count, increment };
};
