const DESCRIPTION_1 =
  "A trading platform powered by AI that works as your personal assistant, guiding and helping you throughout your trading journey.";

const DESCRIPTION_2 =
  "Be it quick research, smart insights, testing hypotheses, or smart risk management in real-time, CapX will be there to help make trading a feasible and reliable source of income.";

export const NewFeatures = (): JSX.Element => {
  return (
    <div
      className="bg-black text-white flex flex-col justify-center items-center lg:py-48 py-12 md:py-24 bg-cover gap-4"
      // style={{
      //   backgroundImage: 'url("hero-2.png")',
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <div className="flex items-center justify-center text-2xl lg:text-6xl md:text-4xl font-montserrat text-center text-golden tracking-widest">
        Change the way you trade
      </div>
      <div
        className="text-2xl lg:text-6xl md:text-4xl font-montserrat w-full pb-20 pt-10 px-10 flex justify-center lg:w-1/2 md:w-3/4 text-center flex flex-col gap-6 md:gap-10"
        style={{ lineHeight: 1.25 }}
      >
        <div>{DESCRIPTION_1}</div>
        <div>{DESCRIPTION_2}</div>
      </div>
    </div>
  );
};
