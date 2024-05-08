import { forwardRef } from "react";

type FeatureCard = {
  title: string;
  description: string;
  image: string;
};

const CONTAINER_CLASS_NAME =
  "flex flex-col gap-10 p-8 w-full h-full border-2 rounded-lg border-slate-400";

export const Card = forwardRef<
  HTMLDivElement,
  { card: FeatureCard; visible: boolean }
>(({ card, visible }, ref): JSX.Element => {
  const imageSrc = `${card.image}.png`;
  return (
    <div
      className={
        visible
          ? "flex text-white w-full border-2 border-transparent flex-none rounded h-full lg:h-104 md:h-102 "
          : "flex text-white w-full border-2 border-transparent flex-none rounded h-5/6 lg:h-100 md:h-90 "
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

        <div
          className={`flex-1 flex w-full items-end justify-center`}
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        ></div>
      </div>
    </div>
  );
});
