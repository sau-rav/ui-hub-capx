import React from "react";
import Image from "next/image";
import capXLogo from "../../public/logo.png";

export const Header = (): JSX.Element => {
  return (
    <div
      className="text-white flex flex-col justify-center items-center bg-cover lg:mt-2 lg:py-48 md:py-36 py-36 gap-4"
      style={{
        backgroundImage: `url('hero.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-2xl lg:text-5xl md:text-3xl font-montserrat lg:mb-6 md:mb-5">
        I N T R O D U C I N G
      </div>

      <div className="lg:mb-6 md:mb-5">
        <Image
          src={capXLogo}
          alt="Cap X"
          className="w-72" // Adjust width using Tailwind CSS classes
        />
      </div>
      <div className="text-s lg:text-3xl font-montserrat">
        Trading made simple and smarter
      </div>
    </div>
  );
};
