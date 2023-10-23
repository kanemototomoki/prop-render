import { expect, describe, test, beforeEach } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("レンダリングされていること", () => {
    expect(screen.getByText("render prop")).toBeInTheDocument();
  });

  test("初期カウントが表示されていること", () => {
    expect(screen.getByText("count: 0")).toBeInTheDocument();
  });

  test("インクリメントされたときにカウントが増加すること", () => {
    const button = screen.getByText("increment");
    fireEvent.click(button);
    expect(
      screen.getByRole("button", { name: /increment/i })
    ).toBeInTheDocument();
  });
});
