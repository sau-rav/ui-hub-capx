import { memo, useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

// Import your logo image
import logo from "../../public/logo.png";

const WAITLIST_ROUTE = "/waitlist";

const NavBar = (): JSX.Element => {
  const router = useRouter();

  const handleJoinWaitlist = useCallback(() => {
    router.push("/waitlist");
  }, []);

  const handleHome = useCallback(() => {
    router.push("/");
  }, []);

  const { route } = router;

  return (
    <div
      className="text-white w-full fixed flex items-center justify-center z-50 h-20 px-5 md:px-20"
      style={{ top: "20px" }}
    >
      <div
        className="w-full rounded-2xl flex items-center h-full px-5 md:px-10"
        style={{
          background:
            "linear-gradient(109deg, rgba(51, 50, 50, 0.26) 10.11%, rgba(51, 50, 50, 0.07) 101.56%)",
          backdropFilter: "blur(17px)",
          WebkitBackdropFilter: "blur(17px)",
        }}
      >
        <div className="flex-1 cursor-pointer" onClick={handleHome}>
          <Image src={logo} alt="logo" height={40} />
        </div>
        {route === WAITLIST_ROUTE ? null : (
          <div>
            <button
              className="h-full w-full px-4 md:px-6 py-2 md:py-3 rounded-full relative bg-golden text-black"
              onClick={handleJoinWaitlist}
            >
              <span>Join Waitlist</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const MemoizedNavBar = memo(NavBar);

export { MemoizedNavBar as NavBar };
