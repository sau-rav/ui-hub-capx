import Image from "next/image";
import logo from "../../public/logo.png";

const DESCRIPTION =
  "We are bringing the tools of top traders to the masses while making then simple and personalized so that trading becomes more \
  accessible for everyone. We offer real-time risk management tools, fast research capabilities, simple backtesting capabilities, \
  personalized learning, simplified insights, and much more";

export const NewFeatures = (): JSX.Element => {
  return (
    <div
      className="bg-black text-white flex flex-col justify-center items-center lg:py-48 py-12 md:py-24 bg-cover gap-4"
      style={{
        backgroundImage: 'url("hero-2.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Image src={logo} alt="Cap X" width={200} />
      <div
        className="text-2xl lg:text-6xl md:text-4xl font-montserrat w-full pt-20 px-10 flex justify-center lg:w-1/2 md:w-3/4"
        style={{ lineHeight: 1.25 }}
      >
        {DESCRIPTION}
      </div>
    </div>
  );
};
