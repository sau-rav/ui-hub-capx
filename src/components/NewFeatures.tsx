const DESCRIPTION_1 =
  "Introducing an AI-powered trading platform designed to be your personal assistant, streamlining your journey from research to investing while speeding and simplifying the whole journey.";

const DESCRIPTION_2 =
  "All your needs in one place, from learning, research, information, data and brokerage. Imagine all this together and in a faster, simpler, and comprehensive way so that you won't need any other platform.";

export const NewFeatures = (): JSX.Element => {
  return (
    <div
      className="bg-black text-white flex flex-col justify-center items-center lg:py-48 py-12 md:py-24 bg-cover gap-8"
      // style={{
      //   backgroundImage: 'url("hero-2.png")',
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <div className="flex items-center text-3xl lg:text-7xl md:text-5xl font-montserrat text-golden tracking-widest md:w-3/4 px-10">
        Change the way you trade
      </div>
      <div
        className="text-xl lg:text-5xl md:text-3xl font-montserrat px-10 flex justify-center md:w-3/4 flex flex-col gap-6 md:gap-10"
        style={{ lineHeight: 1.25 }}
      >
        <div>{DESCRIPTION_1}</div>
        <div>{DESCRIPTION_2}</div>
      </div>
    </div>
  );
};
