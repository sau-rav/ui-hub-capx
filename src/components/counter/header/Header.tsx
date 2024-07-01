import Image from "next/image";

import { Reveal } from "../../Reveal";
import { Card1 } from "./components/Card1";
import { Card2 } from "./components/Card2";
import { Card3 } from "./components/Card3";
import { LineWhite } from "./components/LineWhite";
import { LineGolden } from "./components/LineGolden";

import { useIsMobile } from "../../../hooks/useIsMobile";

import circle from "../../../../public/circle.png";

export const Header = (): JSX.Element => {
  const isMobile = useIsMobile();
  return (
    <div
      className={`flex flex-col text-white gap-1 font-poppins text-center relative ${
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

      <LineWhite />

      <LineGolden />

      {isMobile ? null : <Card1 />}

      <Card2 />

      <Card3 />

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
