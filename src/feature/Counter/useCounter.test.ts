import { expect, describe, test } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter custom hook", () => {
  test("デフォルト値が0であること", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  test("初期値を設定できること", () => {
    const { result } = renderHook(() => useCounter(5));
    expect(result.current.count).toBe(5);
  });

  test("increment関数が引数なしで呼び出された場合、カウントが1増加すること", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  test("increment関数に値が渡された場合、その値だけカウントが増加すること", () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment(5);
    });

    expect(result.current.count).toBe(5);

    act(() => {
      result.current.increment(5);
    });
      
    expect(result.current.count).toBe(10);
  });
});
