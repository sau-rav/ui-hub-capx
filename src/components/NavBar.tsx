import { signOut } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import { memo, useCallback, useState } from "react";

import NavbarModal from "./NavbarModal";

import { useUser } from "../context/user";

import { auth } from "../config/firebase";

// Import your logo image
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../public/logo.png";

const WAITLIST_ROUTE = "/join-waitlist";
const PRIMARY_BUTTON_CLASSNAME =
  "h-full w-full px-4 md:px-6 py-2 md:py-3 rounded-full relative bg-golden text-black hover:font-bold";

const NavBar = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const userContext = useUser();

  const { user, setUser } = userContext ?? {};

  const handleJoinWaitlist = useCallback(() => {
    router.push(WAITLIST_ROUTE);
  }, []);

  const handleHome = useCallback(() => {
    router.push("/");
    handleModalClose();
  }, []);

  const handleLogout = useCallback(async () => {
    try {
      await signOut(auth).then(() => {
        setUser?.(null);
        router.push("/");
      });
    } catch (err) {
      console.error(err);
    }
  }, [setUser]);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const { route } = router;

  let primaryButtonEl;
  if (user) {
    primaryButtonEl = null;
  } else if (route !== WAITLIST_ROUTE) {
    primaryButtonEl = (
      <div>
        <button
          className={PRIMARY_BUTTON_CLASSNAME}
          onClick={handleJoinWaitlist}
        >
          <span>Join Waitlist</span>
        </button>
      </div>
    );
  }

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
        <div className="flex-1 cursor-pointer">
          <Image src={logo} alt="logo" height={40} onClick={handleHome} />
        </div>
        {primaryButtonEl}
        {user ? (
          <div onClick={() => setIsModalOpen(true)}>
            <MenuIcon sx={{ fontSize: 30, color: "#FFFFFF" }} />
          </div>
        ) : null}
        <NavbarModal
          isModalOpen={isModalOpen}
          handleModalClose={handleModalClose}
          handleLogout={handleLogout}
          handleHome={handleHome}
        />
      </div>
    </div>
  );
};

const MemoizedNavBar = memo(NavBar);

export { MemoizedNavBar as NavBar };
