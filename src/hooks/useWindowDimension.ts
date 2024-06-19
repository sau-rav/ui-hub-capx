import { useState, useEffect, useCallback } from "react";

export const useWindowDimension = () => {
  const [width, setWidth] = useState<number>(500);
  const [height, setHeight] = useState<number>(500);

  const handleWindowSizeChange = useCallback(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return { width, height };
};
