import Image from "next/image";

import { Reveal } from "./Reveal";

import { useIsMobile } from "../hooks/useIsMobile";

import card1 from "../../public/card1.png";
import card2 from "../../public/card2.png";
import card3 from "../../public/card3.png";
import whiteLine from "../../public/whiteLine.png";
import lineOrange from "../../public/lineOrange.png";
import circle from "../../public/circle.png";

export const Header = (): JSX.Element => {
  const isMobile = useIsMobile();
  return (
    <div
      className={`flex flex-col text-white gap-1  px-4 font-poppins text-center relative ${
        isMobile ? "px-8 pt-36" : "px-20 justify-center h-screen"
      }`}
      style={{ height: isMobile ? "100vh" : "100vh" }}
    >
      <div
        className="absolute"
        style={{
          right: "0px",
          bottom: "0px",
        }}
      >
        <Image src={circle} alt="card1" height={isMobile ? 1000 : 640} />
      </div>
      <div
        className="absolute"
        style={{
          right: "0px",
          bottom: "0px",
        }}
      >
        <Image src={whiteLine} alt="card1" height={isMobile ? 1000 : 640} />
      </div>
      <div
        className="absolute"
        style={{
          right: "0px",
          bottom: "0px",
        }}
      >
        <Image src={lineOrange} alt="card1" height={isMobile ? 1000 : 640} />
      </div>
      {isMobile ? null : (
        <div className="absolute" style={{ right: "20px", bottom: "20px" }}>
          <Image src={card1} alt="card1" height={260} />
        </div>
      )}
      <div
        className="absolute"
        style={{
          right: isMobile ? undefined : "360px",
          bottom: isMobile ? "60px" : "20px",
          left: isMobile ? "20px" : undefined,
        }}
      >
        <Image src={card2} alt="card1" height={isMobile ? 162 : 300} />
      </div>
      <div
        className="absolute"
        style={{
          right: isMobile ? "20px" : "140px",
          bottom: isMobile ? "240px" : "320px",
        }}
      >
        <Image src={card3} alt="card1" height={isMobile ? 108 : 160} />
      </div>
      <Reveal>
        <p className="text-xl md:text-7xl font-semibold">An AI-powered</p>
      </Reveal>
      <Reveal>
        <p className="text-xl md:text-7xl font-semibold">
          trading platform that
        </p>
      </Reveal>
      <Reveal>
        <p className="text-xl md:text-7xl font-semibold">works as your</p>
      </Reveal>
      <Reveal>
        <p className="text-xl md:text-7xl font-semibold ">personal assistant</p>
      </Reveal>
      <Reveal sliderColor="#808080">
        <p className="text-lg md:text-2xl font-normal text-golden-light text-left md:text-center mt-2 md:mt-12">
          Research to investing, all-in-one place
        </p>
      </Reveal>
    </div>
  );
};
