import type { NextPage } from "next";

import { useState } from "react";
import { Divider } from "../src/components/Divider";
import { NavBar } from "../src/components/NavBar";

const DESCRIPTION = "The next generation trading platform";

const ScreenX: NextPage = () => {
  return (
    <div className="bg-black font-montserrat">
      <NavBar />
      <div
        className="text-white bg-cover p-5 gap-4"
        style={{
          backgroundImage: `url('mainImg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <div
            className="font-extrabold text-5xl lg:text-6xl  md:text-5xl  pt-10 pr-10 flex justify-center lg:w-1/2 md:w-3/4"
            style={{ lineHeight: 1.25 }}
          >
            {DESCRIPTION}
          </div>
          <div
            style={{ lineHeight: 1.25 }}
            className="tracking-wider pb-6 pt-10 text-yellow-500 text-xl sm:text-3xl md:text-4xl font-bold leading-10 md:leading-12 "
          >
            Join now for Priority Access
          </div>

          <div className="flex flex-col items-start">
            <button className="gap-4 inline-flex items-center px-3 sm:px-4 py-3 sm:py-4 bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
                className="w-6 h-6"
              />
              <span className="text-gray-500 font-medium text-sm sm:text-base">
                Sign up using google
              </span>
            </button>
            <div className="mt-5 text-white mt-2 font-medium text-xs lg:text-2xl md:text-xl leading-tight sm:text-base sm:leading-5">
              Sign up using your Google account
            </div>
          </div>
        </div>
      </div>

      <Divider />

      <div
        className="relative text-center py-6 my-4 text-white bg-cover bg-center px-5 gap-4 justify-center flex flex-col items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('priortyAccess.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative font-semibold text-2xl sm:text-2xl lg:text-4xl md:text-3xl flex justify-center w-full">
          T O P
        </div>
        <div className="relative z-10 font-semibold text-5xl sm:text-6xl lg:text-8xl md:text-8xl flex justify-center w-full">
          <span className="text-white font-bold text-shadow-3d">1000</span>
        </div>
        <div className="relative z-10 tracking-wider text-center font-semibold text-1xl sm:text-3xl lg:text-3xl md:text-3xl flex justify-center w-full">
          users will get the beta access
        </div>
      </div>

      <Divider />

      <div className="pt-8 pb-8">
        <ComponentPerksForBeta />
      </div>
      <Divider />
    </div>
  );
};

export const ComponentPerksForBeta = () => {
  const waitListPerks = [
    {
      img: "/waitListImg1.png",
      title: "Access to community of top traders",
      description:
        "Experience the future of research and decision-making. You will only need 10 minutes to do all your trades and research.",
    },
    {
      img: "/waitListImg2.png",
      title: "be the first to try the product",
      description:
        "No need for a new Demat account. Link your current demat account and get started immediately.",
    },
    {
      img: "/waitListImg3.png",
      title: "help design the product",
      description:
        "Be part of the exclusive group of people who will help shape CapX",
    },
    {
      img: "/waitListImg4.png",
      title: "Unlock never played games",
      description:
        "Get access to a lot of games in the Funzone. Games you have never seen before.",
    },
    {
      img: "/waitListImg5.png",
      title: "Unlock exclusive rewards",
      description:
        "Unlock rewards like free brokerage and get cut from each successful referral in priority access",
    },
  ];
  return (
    <>
      <div
        style={{
          padding: 20,
          backgroundColor: "black",
          textAlign: "start",
        }}
      >
        <div className="text-white font-bold text-2xl md:text-7xl lg:text-8xl ">
          Perks of joining <span className="text-yellow-500">waitlist</span>
        </div>
      </div>

      <div
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
        className="mx-6 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory"
      >
        {waitListPerks.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </>
  );
};

interface CardProps {
  item: {
    img: string;
    title: string;
    description: string;
  };
}

const Card = ({ item }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="snap-start flex-shrink-0 sm:w-4/5 w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/4">
      <div className="px-1 rounded-xl  pt-1 bg-gradient-to-r from-yellow-500 to-yellow-300">
        <div
          className="p-5 bg-yellow-500 snap-start"
          style={{
            borderStartStartRadius: "8px",
            borderStartEndRadius: "8px",
            borderEndStartRadius: !isOpen ? "8px" : "0px",
            borderEndEndRadius: !isOpen ? "8px" : "0px",
            height: "300px",
          }}
        >
          <div
            style={{
              height: "40%",
            }}
            className="flex justify-center"
          >
            <img src={item.img} alt="Cap X" />
          </div>
          <div
            style={{
              height: "20%",
            }}
            className="flex uppercase items-center justify-center text-center mt-5  font-semibold text-xl md:text-xl tracking-wider text-black"
          >
            {item.title}
          </div>
          <div
            style={{
              height: "40%",
            }}
            className="flex items-center justify-center"
          >
            <button
              onClick={() => toggleOpen()}
              className="mt-6  font-semibold text-xl md:text-2xl tracking-wider text-white px-8 py-4 rounded-2xl border-2 border-white"
            >
              {isOpen ? "SHOW LESS" : "KNOW MORE"}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          style={{
            borderEndStartRadius: "8px",
            borderEndEndRadius: "6px",
          }}
          className="bg-gradient-to-r from-yellow-500 to-yellow-300 overflow-hidden"
        >
          <div
            className={`p-1 overflow-hidden transition-max-h duration-500 ease-in-out ${
              isOpen ? "max-h-full" : "max-h-0"
            }`}
          >
            <div className="p-4 px-10 text-center bg-black text-white p-4">
              {item.description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScreenX;
