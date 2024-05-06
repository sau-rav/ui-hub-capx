import React, { useEffect, useState } from "react";
import { Button, KIND } from "baseui/button";
import { useRouter } from "next/router";
import { auth } from "../config/firebase"; // Assuming you have a custom hook to manage authentication
import { signOut } from "firebase/auth";

// Import your logo image
import logo from "../../public/logo.png";

export const NavBar = (): JSX.Element => {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [buttonSize, setButtonSize] = useState<"compact" | "mini" | undefined>(
    undefined
  );
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [logoutSuccess, setLogoutSuccess] = useState<boolean>(false);

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
    router.push("/join-waitlist");
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

  if (loading) {
    return <div> Loading ... </div>;
  }

  return (
    <>
      {logoutSuccess && (
        <div className="text-black text-center py-2" style={{backgroundColor: "#EDAF36"}}>
          You have been successfully logged out.
        </div>
      )}
      <div className={`flex flex-wrap items-center py-2 px-6 lg:px-36 bg-black ${isSticky ? 'sticky top-0 left-0 right-0 z-10' : ''}`}>
        <div className="flex items-center gap-2 text-white">
          <img src={logo.src} alt="Cap X" className="h-10 lg:h-12 xl:h-14" />
        </div>
        <div className="flex-1 text-right"> {/* Adjust alignment here */}
          {user ? (
            <>
              <Button
                onClick={handleLogout}
                kind={KIND.secondary}
                size={buttonSize}
                style={{ backgroundColor: "#EDAF36" }}
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              onClick={handleJoinWaitlist}
              kind={KIND.secondary}
              size={buttonSize}
              style={{ backgroundColor: "#EDAF36" }}
            >
              Join Waitlist
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
