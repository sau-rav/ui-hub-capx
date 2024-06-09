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
        className="text-xl lg:text-6xl md:text-3xl font-montserrat px-10 flex justify-center md:w-3/4 flex flex-col gap-6 md:gap-10"
        style={{ lineHeight: 1.25 }}
      >
        <div className="typing-para-1">
          <p>Introducing an AI-powered</p>
          <p>trading platform designed to be</p>
          <p>your personal assistant, streamlining</p>
          <p>your journey from research to</p>
          <p>investing while speeding and</p>
          <p>simplifying the whole journey.</p>
        </div>
        <div className="typing-para-2">
          <p>All your needs in one place,</p>
          <p>from learning, research, information,</p>
          <p>data and brokerage.</p>
          <p>Imagine all this together and</p>
          <p>comprehensive way so that you</p>
          <p>won't need any other platform.</p>
        </div>
      </div>
    </div>
  );
};
