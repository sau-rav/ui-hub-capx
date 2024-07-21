import Image, { StaticImageData } from "next/image";

import { useIsMobile } from "../hooks/useIsMobile";
import { FadeInOut } from "./FadeInOut";

export type Testimony = {
  title?: string;
  description?: string;
  image: StaticImageData;
}[];

export const Testimonial = ({
  title,
  testimony,
}: {
  title: string;
  testimony: Testimony;
}): JSX.Element => {
  const isMobile = useIsMobile();

  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-center pt-16 gap-0 overflow-visible px-4 md:px-16 text-white">
        <div className="flex flex-col items-center justify-center w-full px-4 gap-4">
          <FadeInOut>
            <p className="text-4xl font-bold md:text-7xl text-center mb-6 text-white">
              {title}
            </p>
          </FadeInOut>
          <div
            className={`flex gap-4 w-full ${
              isMobile ? "flex-col" : "flex-row"
            }`}
          >
            <div
              className="p-6 md:p-10 flex-1 rounded-3xl text-xl md:text-3xl flex flex-col"
              style={{
                flexGrow: 1,
                background:
                  "linear-gradient(132.29deg, #0F0F0F 26.18%, #2B2B2B 139.91%)",
              }}
            >
              <div className="flex-1 gap-4 flex flex-col">
                <p className="font-extrabold text-golden">
                  {testimony[0].title}
                </p>
                <p className="text-xl">{testimony[0].description}</p>
              </div>
              <div className="flex justify-end items-end">
                <Image
                  src={testimony[0].image}
                  alt="test1"
                  height={isMobile ? 120 : 180}
                />
              </div>
            </div>
            <div
              className="p-6 md:p-10 rounded-3xl text-xl md:text-3xl flex-1 flex flex-col gap-4"
              style={{
                flexGrow: 1.6,
                background:
                  "linear-gradient(132.29deg, #0F0F0F 26.18%, #2B2B2B 139.91%)",
              }}
            >
              <div className="flex-1 w-full md:w-2/3 gap-4 flex flex-col">
                <p className="font-extrabold text-golden">
                  {testimony[1].title}
                </p>
                <p className="text-xl">{testimony[1].description}</p>
              </div>
              <div className="flex justify-end items-end">
                <Image
                  src={testimony[1].image}
                  alt="test1"
                  height={isMobile ? 120 : 240}
                />
              </div>
            </div>
          </div>
          <div
            className={`flex gap-4 w-full ${
              isMobile ? "flex-col" : "flex-row"
            }`}
          >
            <div
              className="p-6 md:p-10 rounded-3xl text-xl md:text-3xl flex-1 flex flex-col gap-4 flex"
              style={{
                flexGrow: 1.6,
                background:
                  "linear-gradient(132.29deg, #0F0F0F 26.18%, #2B2B2B 139.91%)",
              }}
            >
              <div className="flex-1 w-full md:w-2/3 gap-4 flex flex-col">
                <p className="font-extrabold text-golden">
                  {testimony[2].title}
                </p>
                <p className="text-xl">{testimony[2].description}</p>
              </div>
              <div className="flex justify-end items-end">
                <Image
                  src={testimony[2].image}
                  alt="test1"
                  height={isMobile ? 120 : 240}
                />
              </div>
            </div>
            <div
              className="p-6 md:p-10 flex-1 rounded-3xl text-xl md:text-3xl flex flex-col"
              style={{
                flexGrow: 1,
                background:
                  "linear-gradient(132.29deg, #0F0F0F 26.18%, #2B2B2B 139.91%)",
              }}
            >
              <div className="flex-1 flex flex-col gap-4 flex flex-col">
                <p className="font-extrabold text-golden">
                  {testimony[3].title}
                </p>
                <p className="text-xl">{testimony[3].description}</p>
              </div>
              <div className="flex justify-end items-end">
                <Image
                  src={testimony[3].image}
                  alt="test1"
                  height={isMobile ? 120 : 180}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
