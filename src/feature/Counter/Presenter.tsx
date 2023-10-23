import { FC } from "react";

type Props = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const Presenter: FC<Props> = ({ count, increment, decrement }) => (
  <div>
    <p>count: {count}</p>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </div>
);
