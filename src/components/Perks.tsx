import { useIsMobile } from "../hooks/useIsMobile";

const Perk = ({
  title,
  subTitle,
  description,
  className,
}: {
  title: string;
  subTitle: string;
  description: string;
  className?: string;
}): JSX.Element => {
  return (
    <div
      className={`flex flex-col text-2xl md:text-3xl text-center gap-8 ${className}`}
    >
      <div className="flex flex-col text-transparent bg-clip-text bg-gradient-to-b to-golden via-golden-light from-white">
        <p>{title}</p>
        <p>{subTitle}</p>
      </div>
      <p className="text-white text-xl">{description}</p>
    </div>
  );
};

const Divider = (): JSX.Element => {
  const isMobile = useIsMobile();

  return (
    <div
      className={`flex ${
        isMobile
          ? "bg-gradient-to-r from-golden via-golden-light to-white h-0.5"
          : "bg-gradient-to-b to-golden via-golden-light from-white w-0.5 self-stretch"
      }`}
    ></div>
  );
};

export const Perks = (): JSX.Element => {
  const isMobile = useIsMobile();
  return (
    <div className="md:pb-24 flex flex-col font-poppins gap-16 md:gap-24">
      <div className="flex gap-2 flex-wrap justify-center text-3xl font-bold md:text-6xl px-8">
        <p className="text-white">Perks of joining</p>
        <p className="text-golden">waitlist</p>
      </div>

      <div className={`flex gap-12 h-full ${isMobile ? "flex-col" : ""} px-8`}>
        <Perk
          title="COMMUNITY OF"
          subTitle="TOP TRADERS"
          description="Chance to engage with top traders around the India and learn the best strategies from each other"
          className="flex-1"
        />
        <Divider />
        <Perk
          title="BE THE FIRST TO"
          subTitle="TRY THE PRODUCT"
          description="Chance to engage with top traders around the India and learn the best strategies from each other"
          className="flex-1"
        />
        <Divider />
        <Perk
          title="UNLOCK"
          subTitle="EXCLUSIVE OFFERS"
          description="Chance to engage with top traders around the India and learn the best strategies from each other"
          className="flex-1"
        />
      </div>
    </div>
  );
};
