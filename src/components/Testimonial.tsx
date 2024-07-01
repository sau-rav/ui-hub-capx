import Image from "next/image";

import { useIsMobile } from "../hooks/useIsMobile";
import { FadeInOut } from "./FadeInOut";

import test1 from "../../public/test1.png";
import test2 from "../../public/test2.png";
import test3 from "../../public/test3.png";
import test4 from "../../public/test4.png";

export const Testimonial = (): JSX.Element => {
  const isMobile = useIsMobile();
  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-center pt-16 gap-0 overflow-visible px-4 md:px-16 text-white">
        <div className="flex flex-col items-center justify-center w-full px-4 gap-4">
          <FadeInOut>
            <p className="text-4xl font-bold md:text-7xl text-center mb-6 text-white">
              Why trust CapX?
            </p>
          </FadeInOut>
          <div className={`flex gap-4 ${isMobile ? "flex-col" : "flex-row"}`}>
            <div
              className="p-6 md:p-10 flex-1 rounded-3xl text-xl md:text-3xl bg-gradient-to-l from-light-black to-normal-black"
              style={{ flexGrow: 1 }}
            >
              <div>
                <span className="font-bold text-2xl md:text-4xl mr-2">10+</span>
                <span>years of combined experience from top IITs</span>
              </div>
              <div className="flex justify-end">
                <Image src={test1} alt="test1" height={isMobile ? 120 : 180} />
              </div>
            </div>
            <div
              className="p-6 md:p-10 rounded-3xl text-xl md:text-3xl flex-1 flex flex-col gap-4 bg-gradient-to-l from-light-black to-normal-black"
              style={{ flexGrow: 3 }}
            >
              <div className="flex-1 w-full md:w-2/3">
                Advisors have managed assets exceeding{" "}
                <p className="font-bold text-2xl md:text-4xl mr-2">
                  $4 billion
                </p>
              </div>
              <div className="flex justify-end">
                <Image src={test2} alt="test1" height={isMobile ? 120 : 180} />
              </div>
            </div>
          </div>
          <div className={`flex gap-4 ${isMobile ? "flex-col" : "flex-row"}`}>
            <div
              className="p-6 md:p-10 rounded-3xl text-xl md:text-3xl flex-1 flex flex-col gap-4 bg-gradient-to-l from-light-black to-normal-black"
              style={{ flexGrow: 3 }}
            >
              <div className="flex-1 w-full md:w-2/3">
                Built services generating millions in daily revenue and
                distributing{" "}
                <p className="font-bold text-2xl md:text-4xl mr-2">
                  {" "}
                  3 billion+{" "}
                </p>
                rewards monthly.
              </div>
              <div className="flex justify-end">
                <Image src={test3} alt="test1" height={isMobile ? 120 : 180} />
              </div>
            </div>
            <div
              className="p-6 md:p-10 flex-1 rounded-3xl text-xl md:text-3xl bg-gradient-to-l from-light-black to-normal-black"
              style={{ flexGrow: 1 }}
            >
              <div className="flex flex-col">
                Have raised over{" "}
                <p className="font-bold text-2xl md:text-4xl mr-2">
                  {" "}
                  $250,000{" "}
                </p>
                for scalable B2C products
              </div>
              <div className="flex justify-end">
                <Image src={test4} alt="test1" height={isMobile ? 120 : 180} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
