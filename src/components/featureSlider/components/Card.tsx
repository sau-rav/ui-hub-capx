import { forwardRef } from "react";
import Image, { StaticImageData } from "next/image";

import feature1 from "../../../../public/feature1.png";
import feature2 from "../../../../public/feature2.png";
import feature3 from "../../../../public/feature3.png";
import feature4 from "../../../../public/feature4.png";
import feature5 from "../../../../public/feature5.png";

type FeatureCard = { title: string; description: string; image: keyof typeof SRC_TO_IMAGE };

// Define a type for the mapping between image keys and their source URLs
export type ImageMap = {
  feature1: StaticImageData;
  feature2: StaticImageData;
  feature3: StaticImageData;
  feature4: StaticImageData;
  feature5: StaticImageData;
};

const CONTAINER_CLASS_NAME =
  "flex flex-col gap-10 p-8 w-full h-full border-2 rounded-lg border-slate-400";

// Assign the correct types to SRC_TO_IMAGE
const SRC_TO_IMAGE: ImageMap = {
  feature1: feature1,
  feature2: feature2,
  feature3: feature3,
  feature4: feature4,
  feature5: feature5,
};

export const Card = forwardRef<HTMLDivElement, { card: FeatureCard; visible: boolean }>(
  ({ card, visible }, ref): JSX.Element => {
    return (
      <div
        className={
          visible
          ? "flex text-white w-full border-2 border-transparent flex-none rounded h-100 lg:h-104 md:h-102"
          : "flex text-white w-full border-2 border-transparent flex-none rounded h-98 lg:h-96 md:h-90"
        }
        ref={ref}
      >
        <div className={CONTAINER_CLASS_NAME}>
          <div
            className={
              visible
              ? "text-2xl lg:text-4xl md:text-3xl font-bold"
              : "text-xl lg:text-2xl md:text-base font-bold"
            }
          >
            {card.title}
          </div>
          <div
            className={
              visible
                ? "text-xl lg:text-3xl md:text-xl italic text-gray" // Changed to italic and text-gray
                : "text-base lg:text-2xl md:text-xl italic text-gray" // Changed to italic and text-gray
            }
          >
            {card.description}
          </div>

          <div className="flex-1 flex w-full items-end justify-center">
            <Image
              src={SRC_TO_IMAGE[card.image]}
              alt={`Flip Image`}
              className="bg-content w-40 lg:w-60 md:w-50"
            />
          </div>
        </div>
      </div>
    );
  }
);
