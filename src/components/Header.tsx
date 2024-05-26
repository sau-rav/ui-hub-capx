import React from "react";
import Image from "next/image";
import capXLogo from "../../public/logo.png";

export const Header = (): JSX.Element => {
  return (
    <div
      className="text-white flex flex-col justify-center items-center bg-cover lg:py-36 md:py-30 py-24 gap-8"
      style={{
        backgroundImage: `url('hero.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-2xl lg:text-5xl md:text-3xl font-montserrat lg:mb-6 md:mb-5">
        I N T R O D U C I N G
      </div>

      <div className="lg:mb-6 md:mb-5 px-8">
        <Image src={capXLogo} alt="Cap X" width={760} />
      </div>
      <div className="flex items-center justify-center text-xl md:text-4xl font-montserrat text-center">
        The trading platform that works <br /> as your personal assistant
      </div>
      <div className="flex items-center justify-center text-xl md:text-4xl font-montserrat text-center text-golden font-bold tracking-widest">
        Trading made simpler and smarter
      </div>
    </div>
  );
};
