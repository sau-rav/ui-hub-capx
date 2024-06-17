import { useState, useEffect, useCallback } from "react";

export const useIsMobile = (): boolean => {
  const [width, setWidth] = useState<number>(500);

  const handleWindowSizeChange = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width <= 1200;
};
