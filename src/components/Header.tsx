import React from "react";
import Image from "next/image";
import capXLogo from "../../public/logo.png";

export const Header = (): JSX.Element => {
  return (
    <div
      className="text-white flex flex-col justify-center items-center bg-cover lg:mt-2 lg:py-36 md:py-30 py-24 gap-8"
      style={{
        backgroundImage: `url('hero.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-2xl lg:text-5xl md:text-3xl font-montserrat lg:mb-6 md:mb-5">
        I N T R O D U C I N G
      </div>

      <div className="lg:mb-6 md:mb-5 px-8 relative w-72 h-32 md:w-1/2 md:h-72">
        <Image src={capXLogo} alt="Cap X" fill={true} />
      </div>
      <div className="flex items-center justify-center text-xl md:text-4xl font-montserrat text-center">
        The trading platform that works as your personal assistant
      </div>
      <div className="flex items-center justify-center text-xl md:text-4xl font-montserrat text-center text-golden font-bold tracking-widest">
        Trading made simpler and smarter
      </div>
    </div>
  );
};
