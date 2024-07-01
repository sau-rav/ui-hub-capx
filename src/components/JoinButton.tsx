import { useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

import { useUser } from "../context/user";
import { useIsMobile } from "../hooks/useIsMobile";

import lineLeft from "../../public/lineLeft.png";
import lineRight from "../../public/lineRight.png";

const WAITLIST_ROUTE = "/join-waitlist";

export const JoinButton = (): JSX.Element | null => {
  const handleJoinWaitlist = useCallback(() => {
    router.push(WAITLIST_ROUTE);
  }, []);

  const isMobile = useIsMobile();

  const router = useRouter();

  const userContext = useUser();
  const { user } = userContext ?? {};

  return user ? null : (
    <div className="flex items-center bg-gradient-to-r from-normal-black to-golden text-white">
      <div className="relative flex-1 my-0.5 px-4 md:px-16 py-16 md:py-44 text-xl md:text-3xl bg-normal-black flex w-full">
        <div className="flex flex-1 items-center justify-center font-bold">
          Experience the future of trading and unlock exclusive offers now
        </div>
        <div className="flex-1 flex items-center justify-center">
          <button
            className="px-6 py-3 rounded-full relative bg-golden text-black absolute hover:font-bold"
            onClick={handleJoinWaitlist}
          >
            <span>Join Waitlist</span>
          </button>
        </div>
        {/* <div className="absolute" style={{ right: "0px", bottom: "20px" }}>
          <Image src={lineLeft} alt="lineLeft" height={isMobile ? 80 : 150} />
        </div>
        <div className="absolute" style={{ right: "0px", top: "20px" }}>
          <Image src={lineRight} alt="lineRight" height={isMobile ? 80 : 150} />
        </div> */}
      </div>
    </div>
  );
};
