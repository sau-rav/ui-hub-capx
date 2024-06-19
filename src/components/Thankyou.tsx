import Confetti from "react-confetti";

import { useWindowDimension } from "../hooks/useWindowDimension";
import { useIsMobile } from "../hooks/useIsMobile";

const CONFETTI_COLORS = ["#ED8E36", "#FFC48E", "#ef5222", "#ba3143"];
const drawShape = (ctx: CanvasRenderingContext2D): void => {
  ctx.beginPath();
  const random1 = Math.floor(Math.random() * 20) + 1;
  const random2 = Math.floor(Math.random() * 40) + 1;

  const toss = Math.random() > 0.5;

  toss
    ? ctx.fillRect(-random2 / 4, -random2, random2 / 4, random2)
    : ctx.fillRect(-random1 / 2, -random1, random1 / 2, random1);
  ctx.stroke();
  ctx.closePath();
};

export const Thankyou = (): JSX.Element => {
  const { width, height } = useWindowDimension();
  const isMobile = useIsMobile();

  return (
    <div className="h-screen overflow-hidden">
      <div className="fixed">
        <Confetti
          width={width}
          height={height}
          colors={CONFETTI_COLORS}
          drawShape={drawShape}
        />
      </div>
      <div className="flex flex-col justify-center items-center text-white gap-1 h-screen w-full px-4 font-poppins gap-8">
        <div className="flex gap-4 flex-wrap justify-center items-center">
          <p className="text-3xl md:text-7xl font-semibold">Welcome to CapX,</p>
          <p className="text-3xl md:text-7xl font-semibold text-golden">
            Abhigyan
          </p>
        </div>
        <p
          className="text-xl md:text-2xl font-normal text-white text-center px-20 md:px-0"
          style={isMobile ? undefined : { maxWidth: "60%" }}
        >
          We will go live soon! Stay connected with us on social media for the
          latest updates and exclusive content!
        </p>
      </div>
    </div>
  );
};
