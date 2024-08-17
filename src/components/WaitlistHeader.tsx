// libs
import { useCallback, useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";

// components
import { WaitListHeaderHero } from "./WaitListHeaderHero";
import { ThankyouModal } from "./ThankyouModal";

// hooks
import { useUser } from "../context/user";
import { useIsMobile } from "../hooks/useIsMobile";
import { useSignUpMutation } from "../hooks/useSignUpMutation";

// utils
import { auth, googleProvider } from "../config/firebase";
import Image from "next/image";

// constants
import bg from "../../public/bgEllipses.png";
import bgMobile from "../../public/bgMobile.png";

// types
import type { User } from "../context/user/context";

export const WaitlistHeader = (): JSX.Element => {
  const [isThankYouVisible, setIsThankYouVisible] = useState(false);
  const router = useRouter();

  const userContextValue = useUser();
  const { setUser, user } = userContextValue ?? {};
  const isMobile = useIsMobile();

  const onProfileRedirect = useCallback(() => {
    router.push("/profile");
  }, [router]);

  const onSuccess = useCallback(
    async (data: {
      emailId: string;
      fullName: string;
      invitationCode?: string;
      existingUser?: boolean;
      userId: string;
    }) => {
      setUser?.({
        ...user,
        email: data.emailId,
        displayName: data.fullName,
        invitationCode: data.invitationCode,
        userId: data.userId,
      } as unknown as User);

      if (!data.existingUser) {
        setIsThankYouVisible(true);
      } else {
        onProfileRedirect();
      }
    },
    [user, onProfileRedirect]
  );

  const { mutateAsync: signUp } = useSignUpMutation({ onSuccess });

  const signInWithGoogle = useCallback(async () => {
    try {
      const userCred = await signInWithPopup(auth, googleProvider);
      await signUp(userCred.user);
    } catch (err) {
      console.error(err);
    }
  }, [setUser]);

  return (
    <div
      className={`flex-1 flex flex-col text-white gap-4 font-poppins gap-4 justify-center h-screen items-center justify-center text-center max-h-screen overflow-hidden relative ${
        isMobile ? "pt-40 pb-0 pl-4" : "pt-0 pl-16"
      }`}
      style={{ height: "100vh" }}
    >
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          src={isMobile ? bgMobile : bg}
          alt="bg"
          height={1000}
          width={1000}
        ></Image>
      </div>

      <div className="flex flex-col gap-2 md:mt-24">
        <p className="text-3xl md:text-5xl font-extrabold">
          Start your journey
        </p>
        <p className="text-3xl md:text-5xl font-extrabold">
          to smarter investing
        </p>
        <p className="text-xl md:text-3xl font-semibold text-golden-light  mt-2 ">
          Join now for early access
        </p>
      </div>

      <div className="flex flex-col gap-4 items-center justify-center group mb-10">
        <div className="flex">
          <button
            className="h-full px-3 py-3 rounded-full relative border text-black absolute flex group-hover:bg-golden-light group-hover:border-golden"
            onClick={signInWithGoogle}
          >
            <img
              src="https://p1.edge.duggup.com/tpt-icons/google.svg"
              alt="Google Logo"
              className="lg:w-8 h-8 lg:mr-2"
            />
            <span className="text-white group-hover:text-black text-lg md:text-xl">
              Signup using Google
            </span>
          </button>
        </div>
        <p className="text-md md:text-xl text-white text-left">
          Signup using your google account
        </p>
      </div>

      <ThankyouModal isOpen={isThankYouVisible} />

      <WaitListHeaderHero />
    </div>
  );
};
