import { forwardRef } from "react";
import Image from "next/image";

import feature1 from "../../../../public/feature1.png";
import feature2 from "../../../../public/feature2.png";
import feature3 from "../../../../public/feature3.png";
import feature4 from "../../../../public/feature4.png";
import feature5 from "../../../../public/feature5.png";

type FeatureCard = { title: string; description: string };

const CONTAINER_CLASS_NAME =
  "flex flex-col gap-8 p-8 w-full h-full border-2 rounded-lg border-slate-400";

const SRC_TO_IMAGE: ImageMap = {
  feature1: feature1,
  feature2: feature2,
  feature3: feature3,
  feature4: feature4,
  feature5: feature5,
};

// eslint-disable-next-line react/display-name
export const Card = forwardRef<
  HTMLDivElement,
  { card: FeatureCard; visible: boolean }
>(
  (
    { card, visible }: { card: FeatureCard; visible: boolean },
    ref
  ): JSX.Element => {
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
                ? "text-2xl lg:text-4xl md:text-3xl"
                : "text-xl lg:text-2xl md:text-base"
            }
          >
            {card.title}
          </div>
          <div
            className={
              visible
                ? "text-xl lg:text-3xl md:text-xl"
                : "text-base lg:text-2xl md:text-xl"
            }
          >
            {card.description}
          </div>

          <div className="flex-1 flex w-full items-end justify-center h-56">
            <Image
              src={SRC_TO_IMAGE[card.image]}
              alt={`Flip Image`}
              className="bg-content"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    );
  }
);
