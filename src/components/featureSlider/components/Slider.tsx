import { useState, useCallback, ReactNode, useRef } from "react";

import NextIcon from "@mui/icons-material/ArrowForwardIos";
import BackIcon from "@mui/icons-material/ArrowBackIosNew";

export const Slider = ({
  upfrontCount,
  children,
  cardWidth,
}: {
  upfrontCount: number;
  children: ReactNode[];
  cardWidth: number;
}): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const childCount = children?.length;

  const previousClick = useCallback(
    () => setCurrentIndex((prevIndex) => prevIndex - 1),
    []
  );
  const nextClick = useCallback(
    () => setCurrentIndex((prevIndex) => prevIndex + 1),
    []
  );

  const containerWidth = Math.min(
    upfrontCount * cardWidth,
    (childCount - currentIndex * upfrontCount) * cardWidth
  );

  return (
    <div className="flex justify-center">
      <div className="flex gap-4 justify-center w-3/4">
        <button
          disabled={currentIndex === 0}
          onClick={previousClick}
          className="text-white p-4 m-4"
        >
          <BackIcon />
        </button>

        <div className="flex flex-1 justify-center">
          <div
            className="flex h-auto flex-1 w-full"
            style={{
              width: `${containerWidth}px`,
              justifyItems: "flex-center",
              overflow: "hidden",
              transition: "1s ease-in",
            }}
          >
            <div
              className="flex w-full"
              style={{
                transitionDelay: "250ms",
                translate: `-${
                  currentIndex * (cardWidth + 4) * upfrontCount
                }px`,
                transition: "1s ease-in",
              }}
            >
              {children}
            </div>
          </div>
        </div>

        <button
          disabled={currentIndex + 1 === Math.floor(childCount / upfrontCount)}
          onClick={nextClick}
          className="text-white p-4 m-4"
        >
          <NextIcon />
        </button>
      </div>
    </div>
  );
};
