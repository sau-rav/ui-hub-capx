import Image from "next/image";

import { useIsMobile } from "../hooks/useIsMobile";

import signUp from "../../public/signUp.png";
import engage from "../../public/engage.png";
import key from "../../public/key.png";

import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

export const Steps = (): JSX.Element => {
  const isMobile = useIsMobile();
  return (
    <div
      className={`flex bg-light-black ${
        isMobile ? "py-10 px-5 flex-col gap-6" : "py-20 px-10 gap-4"
      }`}
    >
      <div
        className={`flex-1 flex justify-center items-center text-white gap-2 ${
          isMobile ? "flex-col text-md" : "text-xl"
        }`}
      >
        <Image src={signUp} alt="signUp"></Image>
        <div className={`${isMobile ? "text-center" : ""}`}>
          Sign-up on the Waitlist
        </div>
        <div
          className={`flex justify-center items-center ${
            isMobile ? "pt-6" : "px-6"
          }`}
        >
          {isMobile ? (
            <KeyboardDoubleArrowDownIcon
              fontSize="large"
              className="text-white"
            />
          ) : (
            <KeyboardDoubleArrowRightIcon
              fontSize="large"
              className="text-white"
            />
          )}
        </div>
      </div>
      <div
        className={`flex-1 flex justify-center items-center text-white gap-2 text-lg md:text-xl ${
          isMobile ? "flex-col text-md" : "text-xl"
        }`}
      >
        <Image src={engage} alt="engage"></Image>
        <div className={`${isMobile ? "text-center" : ""}`}>
          Keep engaging to get a jump in your waitlist rank
        </div>
        <div
          className={`flex justify-center items-center ${
            isMobile ? "pt-6" : "px-6"
          }`}
        >
          {isMobile ? (
            <KeyboardDoubleArrowDownIcon
              fontSize="large"
              className="text-white"
            />
          ) : (
            <KeyboardDoubleArrowRightIcon
              fontSize="large"
              className="text-white"
            />
          )}
        </div>
      </div>
      <div
        className={`flex-1 flex justify-center items-center text-white gap-2 text-lg md:text-xl ${
          isMobile ? "flex-col text-md" : "text-xl"
        }`}
      >
        <Image src={key} alt="key"></Image>
        <div className={`${isMobile ? "text-center" : ""}`}>
          Get early access to the product
        </div>
      </div>
    </div>
  );
};
