import { NavBar } from "../src/components/NavBar";
import { NextPage } from "next";

import { Thankyou } from "../src/components/Thankyou";
import Footer from "../src/components/footer";

import Confetti from "react-confetti";

import { useWindowDimension } from "../src//hooks/useWindowDimension";

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

const ThankyouPage: NextPage = () => {
  const { width, height } = useWindowDimension();

  return (
    <div className="bg-normal-black font-montserrat">
      <div className="fixed">
        <Confetti
          width={width}
          height={height}
          colors={CONFETTI_COLORS}
          drawShape={drawShape}
        />
      </div>
      <NavBar />
      <Thankyou />
      <Footer />
    </div>
  );
};

export default ThankyouPage;
