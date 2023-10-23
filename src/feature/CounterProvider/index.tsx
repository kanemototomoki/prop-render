import { FC, ReactNode } from "react";
import { useCounter } from "./useCounter";

type Props = {
  render: ({ count, increment }: ReturnType<typeof useCounter>) => ReactNode;
};

/**
 * @desc カウントロジックを持つコンポーネント
 */
export const CounterProvider: FC<Props> = ({ render }) => {
  const { count, increment } = useCounter();

  return render({ count, increment });
};
