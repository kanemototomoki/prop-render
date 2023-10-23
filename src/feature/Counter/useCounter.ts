import { useCallback, useState } from "react";

export const useCounter = (initialNum: number = 0) => {
  const [count, setCount] = useState(initialNum);

  const increment = useCallback((num: number = 1) => {
    setCount((c) => c + num);
  }, []);

  const decrement = useCallback((num: number = 1) => {
    setCount((c) => c - num);
  }, []);

  return { count, increment, decrement };
};
