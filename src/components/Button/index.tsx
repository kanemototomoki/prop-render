import { FC, ReactNode } from "react";

type Variant = "red" | "blue";
const COLOR_MAP: { [K in Variant]: string } = {
  red: "red",
  blue: "blue",
} as const;

type Props = {
  onClick: () => void;
  children: ReactNode;
  variant?: Variant;
};

export const Button: FC<Props> = ({ variant = "red", onClick, children }) => {
  const color = COLOR_MAP[variant];
  
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        backgroundColor: color,
        color: "white",
      }}
    >
      {children}
    </button>
  );
};
