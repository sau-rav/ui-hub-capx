import Image from "next/image";
import logo from "../../public/logo.png";

const DESCRIPTION =
  "We leverage AI to democratize top traders' tools for the masses in a personalized and easy-to-use way, making trading an accessible and reliable source of income for all Indians. Our platform offers smart real-time risk management, swift research, easy backtesting capabilities, personalized learning, and more.";

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
        className="text-2xl lg:text-6xl md:text-4xl font-montserrat w-full pb-20 pt-10 px-10 flex justify-center lg:w-1/2 md:w-3/4 text-center"
        style={{ lineHeight: 1.25 }}
      >
        {DESCRIPTION}
      </div>
    </div>
  );
};
