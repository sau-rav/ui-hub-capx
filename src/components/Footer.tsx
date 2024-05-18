import Image from "next/image";

import capXLogo from "../../public/logo.png";

import RedditIcon from "@mui/icons-material/Reddit";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export const Footer = (): JSX.Element => {
  return (
    <div className="p-4 relative">
      <div className="w-full rounded-3xl h-64 bg-footer bg-opacity-25"></div>
      <div className="bg-black absolute top-0 right-0 h-20 w-48 md:w-64 lg:w-64 rounded-bl-3xl">
        <div className="relative flex justify-center items-center h-full w-full">
          <div
            className="absolute h-10 w-10 bg-footer bg-opacity-0 right-0 rounded-full"
            style={{
              top: "5rem",
              right: "1rem",
              boxShadow: "20px -20px 0 black",
            }}
          />

          <div
            className="absolute h-10 w-10 bg-footer bg-opacity-0 rounded-full right-[12rem] md:right-[16rem] lg:right-[16rem]"
            style={{
              top: "1rem",
              boxShadow: "20px -20px 0 black",
            }}
          />
          <div className="text-white flex justify-center items-center h-full text-xl md:text-2xl pr-10">
            Join us on
          </div>
        </div>
      </div>
      <div className="bg-black absolute bottom-0 h-20 w-48 md:w-64 lg:w-64 rounded-tr-3xl">
        <div className="relative flex justify-center items-center h-full w-full">
          <div
            className="absolute inset-0 h-10 w-10 bg-footer bg-opacity-0 rounded-full"
            style={{ top: "-2.5rem", boxShadow: "-20px 20px 0 black" }}
          />
          <div
            className="absolute h-10 w-10 bg-footer bg-opacity-0 rounded-full bottom-0 left-[12rem] md:left-[16rem] lg:left-[16rem]"
            style={{
              bottom: "1rem",
              boxShadow: "-20px 20px 0 black",
            }}
          />
          <div className="text-golden flex justify-center items-center h-full text-base/2 md:text-xs lg:text-xs text-center">
            Copyright &copy; CapX 2024. Made in India
          </div>
        </div>
      </div>
      <div className="absolute inset-0" style={{ left: "2rem" }}>
        <div className="relative h-24 md:h-44 w-36 md:w-100 lg:w-106 top-[3.6rem] md:top-[1.6rem] lg:top-[1rem]">
          <Image src={capXLogo} alt="Cap X" fill={true} />
        </div>
      </div>
    </div>
  );
};
