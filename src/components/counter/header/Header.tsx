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
  return isMobile ? (
    <div className="flex flex-col text-white gap-1 font-poppins text-center relative h-screen items-center justify-center px-2 text-center">
      <Reveal>
        <p className="text-3xl md:text-7xl font-semibold">An AI-powered</p>
      </Reveal>
      <Reveal>
        <p className="text-3xl md:text-7xl font-semibold text-center">
          investing platform that
        </p>
      </Reveal>
      <Reveal>
        <p className="text-3xl md:text-7xl font-semibold">works as your</p>
      </Reveal>
      <Reveal>
        <p className="text-3xl md:text-7xl font-semibold ">
          personal assistant
        </p>
      </Reveal>
      <Reveal sliderColor="#808080">
        <p className="text-xl md:text-2xl font-normal text-golden-light md:text-center mt-2 md:mt-12">
          All your investing needs, in one place
        </p>
      </Reveal>
    </div>
  ) : (
    <div
      className={`flex flex-col text-white gap-1 font-poppins text-center relative ${
        isMobile ? "px-8 pt-36" : "px-20 justify-center h-screen"
      }`}
      style={{ height: "100vh" }}
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

      <Card1 />

      <Card2 />

      <Card3 />

      <p className="w-fit text-3xl md:text-7xl font-semibold z-10">
        An AI-powered
      </p>
      <p className="w-fit text-3xl md:text-7xl font-semibold text-left z-10">
        investing platform that
      </p>
      <p className="w-fit text-3xl md:text-7xl font-semibold z-10">
        works as your
      </p>
      <p className="w-fit text-3xl md:text-7xl font-semibold z-10">
        personal assistant
      </p>
      <p className="w-fit text-xl md:text-2xl font-normal text-golden-light text-left md:text-center mt-2 md:mt-12 z-10">
        All your investing needs, in one place
      </p>
    </div>
  );
};
