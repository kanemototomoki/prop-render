import { FC, ReactNode } from "react";
import { useCounter } from "./useCounter";

type Props = {
  render: ({
    count,
    increment,
    decrement,
  }: ReturnType<typeof useCounter>) => ReactNode;
  initialNum?: Parameters<typeof useCounter>[0];
};

export const Container: FC<Props> = ({ render, initialNum }) => {
  const { count, increment, decrement } = useCounter(initialNum);

      return render({ count, increment, decrement });
};
