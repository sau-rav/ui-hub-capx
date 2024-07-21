import type { NextPage } from "next";

import { Divider } from "../src/components/Divider";
import { ComponentPerksForBeta } from "../src/components/LeaderBoard/Components/ComponentPerksForBeta";
import {
  headerCommonStyle,
  joiningWaitList,
} from "../src/components/LeaderBoard/Components/Constants";

import { NavBar } from "../src/components/NavBar";
import Footer from "../src/components/footer";

const DESCRIPTION = "The next generation trading platform";

const Waitlist: NextPage = () => {
  return (
    <div className="bg-black font-montserrat pt-40">
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
        <div className="relative font-semibold text-5xl sm:text-6xl lg:text-8xl md:text-8xl flex justify-center w-full">
          <span className="text-white font-bold text-shadow-3d">1000</span>
        </div>
        <div className="relative tracking-wider text-center font-semibold text-1xl sm:text-3xl lg:text-3xl md:text-3xl flex justify-center w-full">
          users will get the beta access
        </div>
      </div>

      <Divider />

      <div
        style={{
          padding: 20,
          textAlign: "start",
        }}
      >
        <div className={`${headerCommonStyle}`}>
          Perks of joining <span className="text-yellow-500">waitlist</span>
        </div>
      </div>

      <ComponentPerksForBeta data={joiningWaitList} />
      <Divider />
      <Footer />
    </div>
  );
};

export default Waitlist;
