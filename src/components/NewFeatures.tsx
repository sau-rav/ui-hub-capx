import Image from "next/image";
import logo from "../../public/logo.png"; // Import your logo image

const DESCRIPTION =
  "We are bringing the tools of top traders to the masses while making then simple and personalized so that trading becomes more \
  accessible for everyone. We offer real-time risk management tools, fast research capabilities, simple backtesting capabilities, \
  personalized learning, simplified insights, and much more";

export const NewFeatures = (): JSX.Element => {
  return (
    <div
      className="bg-black text-white flex flex-col justify-center items-center py-36 bg-cover gap-4"
      style={{
        backgroundImage: 'url("hero-2.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mb-4 lg:mb-6 md:mb-5 mt-4 w-72 h-24 flex justify-center items-center">
        <Image src={logo} alt="Cap X" />
      </div>
      <div
        className="text-2xl lg:text-6xl md:text-4xl font-montserrat w-full pt-20 px-10 flex justify-center lg:w-1/2 md:w-3/4"
        style={{ lineHeight: 1.25 }}
      >
        {DESCRIPTION}
      </div>
    </div>
  );
};
