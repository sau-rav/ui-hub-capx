import { useEffect, useState, memo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

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

const MemoizedNavBar = memo(NavBar);

export { MemoizedNavBar as NavBar };
