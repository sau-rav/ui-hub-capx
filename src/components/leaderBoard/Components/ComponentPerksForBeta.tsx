import Image from "next/image";
import { useState } from "react";
import Bot from "../../../../public/BotImg.png";

export const ComponentPerksForBeta = () => {
  return (
    <>
      <div
        style={{
          padding: 20,
          backgroundColor: "black",
          textAlign: "start",
        }}
      >
        <div className="text-white font-bold text-4xl md:text-7xl lg:text-8xl font-montserrat">
          Perks of <span className="text-yellow-500">beta</span>
        </div>
      </div>

      <div
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
        className="mx-6 scrollBarHide flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth md:p-6"
      >
        {Array.from(Array(3).keys()).map((index) => (
          <Beta key={index} />
        ))}
      </div>
    </>
  );
};

const Beta = () => {
  const [accordion, setAccordion] = useState<boolean>(false);

  return (
    <div className="flex-shrink-0 sm:w-4/5 w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/4">
      <div className="p-1 border-rounded bg-gradient-to-r from-yellow-500 to-yellow-300">
        <div className="p-5 rounded-lg bg-yellow-500 flex flex-col items-center justify-center snap-start">
          <Image src={Bot} alt="Cap X" width={140} />
          <div className="mt-5 font-montserrat font-semibold text-xl md:text-2xl tracking-wider text-white">
            YOUR PERSONAL ASSISTANT
          </div>
          <button
            onClick={() => setAccordion(!accordion)}
            className={`mt-6 font-montserrat font-semibold text-xl md:text-2xl tracking-wider text-white px-8 py-4 rounded-2xl ${
              accordion ? "" : "border-2 border-white"
            }`}
          >
            {accordion ? "SHOW LESS" : "KNOW MORE"}
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-b-lg overflow-hidden">
        <div
          className={`bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-b-lg overflow-hidden transition-max-h duration-500 ease-in-out ${
            accordion ? "max-h-full" : "max-h-0"
          }`}
        >
          <div className="bg-gray-900 text-white p-4">
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis ris Maecenas eget condimentum velit, sit amet feugiat lectus.
            Class aptent taciti sociosqu ad litora consectetur adipiscing elit.
            Etiam eu turpis risMaecenas eget condimentum velit, sit a
          </div>
        </div>
      </div>
    </div>
  );
};
