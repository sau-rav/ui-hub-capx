import { useCallback } from "react";
import { useRouter, NextRouter } from "next/router";
import { signInWithPopup } from "firebase/auth";
import Image from "next/image";

import { useUser } from "../context/user";
import { useIsMobile } from "../hooks/useIsMobile";
import { useSignUpMutation } from "../hooks/useSignUpMutation";

import { auth, googleProvider } from "../config/firebase";
import joinWaitlist from "../../public/joinWaitlist.png";
import { User } from "../context/user/context";

export const WaitlistHeader = (): JSX.Element => {
  const router: NextRouter = useRouter();

  const userContextValue = useUser();
  const { setUser } = userContextValue ?? {};
  const isMobile = useIsMobile();

  const { mutateAsync: signUp } = useSignUpMutation({
    onSuccess: () => router.push("/thankyou"),
  });

  const signInWithGoogle = useCallback(async () => {
    try {
      const userCred = await signInWithPopup(auth, googleProvider);
      setUser?.({
        displayName: userCred.user.displayName,
        email: userCred.user.email,
        uid: userCred.user.uid,
      });
      router.push("/thankyou");
      // await signUp(userCred.user);
    } catch (err) {
      console.error(err);
    }
  }, [setUser]);

  return (
    <div className={`flex ${isMobile ? "flex-col" : ""}`}>
      <div
        className={`flex-1 flex flex-col text-white gap-1 font-poppins gap-12 justify-center ${
          isMobile
            ? "pt-40 pb-0 pl-4 text-center items-center"
            : "pt-0 pl-16 items-start"
        }`}
      >
        <div className="flex flex-col gap-2">
          <p className="text-3xl md:text-7xl font-bold">The next generation</p>
          <p className="text-3xl md:text-7xl font-bold">trading platform</p>
          <p className="text-xl md:text-3xl font-semibold text-golden-light  mt-8 md:mt-12">
            Join now for Early Access
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex">
            <button
              className="h-full px-6 py-3 rounded-xl relative bg-white text-black absolute flex hover:bg-golden"
              onClick={signInWithGoogle}
            >
              <img
                src="https://p1.edge.duggup.com/tpt-icons/google.svg"
                alt="Google Logo"
                className="lg:w-8 h-8 lg:mr-2"
              />
              <span className="text-light-grey hover:text-black text-lg md:text-xl">
                Signup using Google
              </span>
            </button>
          </div>
          <p className="text-md md:text-xl text-white text-left">
            Signup using your google account
          </p>
        </div>
      </div>
      {isMobile ? (
        <div className="h-96">
          <div
            className="flex-1 h-full"
            style={{
              backgroundImage: `url('joinWaitlist.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      ) : (
        <div className={`flex-1 justify-center items-center w-1/2 h-1/2`}>
          <Image
            src={joinWaitlist}
            alt="coin"
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
            objectFit="cover"
          ></Image>
        </div>
      )}
    </div>
  );
};
