import { useState, useEffect, useCallback } from "react";

export const useIsMobile = (): boolean => {
  const [width, setWidth] = useState<number>(1000);

  const handleWindowSizeChange = useCallback(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width <= 768;
};
