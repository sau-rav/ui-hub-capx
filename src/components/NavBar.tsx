import React, { useEffect, useState } from "react";
import { Button, KIND, SIZE } from "baseui/button";
import { useRouter } from "next/router";
import { auth } from "../config/firebase"; // Assuming you have a custom hook to manage authentication
import { signOut } from "firebase/auth";

export const NavBar = (): JSX.Element => {
  const router = useRouter();
  const [user, setUser] = useState<any>(null); // Custom hook to manage authentication
  const [loading, setLoading] = useState<boolean>(true);
  const [buttonSize, setButtonSize] = useState<"compact" | "mini" | undefined>(
    undefined
  );

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

  const handleJoinWaitlist = () => {
    router.push("/join-waitlist");
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); // Use signOut function from firebase/auth
      router.push("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  if (loading) {
    return <div> Loading ... </div>;
  }

  return (
    <div className="flex flex-wrap items-center py-2 px-6 lg:px-36 bg-black">
      <div
        className="flex-1 flex items-center gap-2 text-white text-3xl lg:text-5xl font-bold"
        style={{ color: "#EDAF36" }}
      >
        Cap X
      </div>
      {user ? (
        <>
          <div className="text-white mr-2 lg:mr-4">{user.displayName}</div>
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
  );
};
