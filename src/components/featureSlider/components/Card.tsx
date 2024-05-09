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
          ? "flex text-white w-full border-2 border-transparent flex-none rounded h-100 lg:h-106 md:h-104"
          : "flex text-white w-full border-2 border-transparent flex-none rounded h-98 lg:h-104 md:h-102"
      }
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
      ref={ref}
    >
      <div className={CONTAINER_CLASS_NAME}>
        <div
          className={
            visible
              ? "text-xl lg:text-3xl md:text-2xl font-bold"
              : "text-lg lg:text-2xl md:text-xl font-bold"
          }
        >
          {card.title}
        </div>
        <div
          className={
            visible
              ? "text-lg lg:text-2xl md:text-xl italic text-slate-300" // Changed to italic and text-slate-300
              : "text-base lg:text-xl md:text-lg italic text-slate-300" // Changed to italic and text-slate-300
          }
        >
          {card.description}
        </div>
      </div>
    </div>
  );
});
