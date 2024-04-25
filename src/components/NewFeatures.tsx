import Image from "next/image";
import logo from "../../public/logo.png"; // Import your logo image

const DESCRIPTION =
  "We are bringing the tools of top traders to the masses while making then simple and personalized so that trading becomes more \
  accessible for everyone. We offer real-time risk management tools, fast research capabilities, simple backtesting capabilities, \
  personalized learning, simplified insights, and much more";

export const NewFeatures = (): JSX.Element => {
  return (
    <div className="bg-black text-white flex flex-col justify-center items-center py-36 bg-cover"
      style={{ 
        backgroundImage: 'url("hero-2.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} 
    >
      <div className="text-3xl lg:text-5xl md:text-4xl"> SAY HELLO TO</div>
      <div className="mb-4 lg:mb-6 md:mb-5 mt-4 w-72 h-24 flex justify-center items-center"> {/* Adjust width and height using Tailwind CSS classes */}
        <Image
          src={logo}
          alt="Cap X"
        />
      </div>
      <div className="text-xl lg:text-3xl md:text-2xl font-mono w-full px-20 pt-20 text-center"> {/* Added text-center class */}
        {DESCRIPTION}
      </div>
    </div>
  );
};
