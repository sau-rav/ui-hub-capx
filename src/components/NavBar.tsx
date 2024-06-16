import { useEffect, useState, memo } from "react";
import { useRouter } from "next/router";
import { motion, useScroll, useTransform } from "framer-motion";

import { Button, KIND } from "baseui/button";
import { auth } from "../config/firebase"; // Assuming you have a custom hook to manage authentication
import { signOut } from "firebase/auth";
import Image from "next/image";

// Import your logo image
import logo from "../../public/logo.png";

const PAGES = [
  { id: "HOME", label: "Home", route: "/" },
  { id: "BLOGS", label: "Blogs", route: "/blogs" },
  { id: "FUNZONE", label: "Funzone", route: "/funzone" },
  { id: "FAQ", label: "FAQ's", route: "/faq" },
];

const NAVIGATOR_LINK_CLASSNAME =
  "border border-solid p-1 px-2 rounded-md hover:border-golden border-transparent";

const WAITLIST_ROUTE = "/waitlist";

const NavBar = (): JSX.Element => {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [buttonSize, setButtonSize] = useState<"compact" | "mini" | undefined>(
    undefined
  );
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [logoutSuccess, setLogoutSuccess] = useState<boolean>(false);

  const { route } = router;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setButtonSize("mini");
      } else {
        setButtonSize("compact");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getFirstName = (displayName: string): string => {
    const names = displayName.split(" ");
    return names[0];
  };

  const handleJoinWaitlist = () => {
    router.push("/waitlist");
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setLogoutSuccess(true);
      setTimeout(() => {
        setLogoutSuccess(false);
        router.push("/");
      }, 1500);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <>
      {logoutSuccess && (
        <div
          className="text-black text-center py-2"
          style={{ backgroundColor: "#EDAF36" }}
        >
          You have been successfully logged out.
        </div>
      )}
      <div
        className={`flex flex-wrap items-center py-2 px-6 lg:px-36 bg-black ${
          isSticky ? "sticky top-0 left-0 right-0 z-10" : ""
        }`}
      >
        <div className="flex items-center gap-2 text-white">
          <Image src={logo.src} alt="Cap X" width={120} height={80} />
        </div>
        {/* <div className="flex-1 flex gap-3 justify-center text-white">
          {PAGES.map((page) => (
            <div
              key={page.id}
              className={
                route === page.route
                  ? `${NAVIGATOR_LINK_CLASSNAME} text-golden`
                  : NAVIGATOR_LINK_CLASSNAME
              }
            >
              <Link href={page.route}>{page.label}</Link>
            </div>
          ))}
        </div> */}
        <div className="flex-1 flex justify-end">
          {/* Adjust alignment here */}
          {user || loading ? (
            <>
              <Button
                onClick={handleLogout}
                kind={KIND.secondary}
                size={buttonSize}
                style={{ backgroundColor: "#EDAF36" }}
                shape="pill"
              >
                Logout
              </Button>
            </>
          ) : route === WAITLIST_ROUTE ? null : (
            <Button
              onClick={handleJoinWaitlist}
              kind={KIND.secondary}
              size={buttonSize}
              style={{ backgroundColor: "#EDAF36" }}
              shape="pill"
              className="px-4"
            >
              Join Waitlist
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export const NavBarV2 = (): JSX.Element => {
  useState;
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
        }}
      >
        <div className="flex-1">
          <Image src={logo} alt="logo" height={40} />
        </div>

        <div className="bg-gradient-to-r from-golden to-golden-light-light rounded-2xl p-1 justify-end">
          <button className="h-full w-full px-6 py-3 rounded-xl md:rounded-2xl font-bold relative bg-black text-white hover:bg-transparent hover:text-black">
            <span>Join Waitlist</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const MemoizedNavBar = memo(NavBar);

export { MemoizedNavBar as NavBar };
