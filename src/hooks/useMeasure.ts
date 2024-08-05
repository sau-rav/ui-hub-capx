import { useMemo, useState, useLayoutEffect } from "react";
import { flushSync } from "react-dom";

type UseMeasureRect = Pick<
  DOMRectReadOnly,
  "x" | "y" | "top" | "left" | "right" | "bottom" | "height" | "width"
>;
type UseMeasureRef<E extends Element = Element> = (element: E) => void;
type UseMeasureResult<E extends Element = Element> = [
  UseMeasureRef<E>,
  UseMeasureRect
];

export const canUseDom = (): boolean =>
  !!(
    typeof window !== "undefined" &&
    window.document &&
    window.document.createElement
  );

const defaultState: UseMeasureRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

export function useMeasure<E extends Element = Element>(): UseMeasureResult<E> {
  const [element, ref] = useState<E | null>(null);
  const [rect, setRect] = useState<UseMeasureRect>(defaultState);

  const observer = useMemo(
    () =>
      canUseDom()
        ? new ResizeObserver((entries) => {
            if (entries[0]) {
              const { x, y, width, height, top, left, bottom, right } =
                entries[0].contentRect;

              flushSync(() => {
                setRect({ x, y, width, height, top, left, bottom, right });
              });
            }
          })
        : undefined,
    []
  );

  useLayoutEffect(() => {
    if (!element || !observer) {
      return undefined;
    }

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [element, observer]);

  return [ref, rect];
}
