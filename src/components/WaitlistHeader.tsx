import { useCallback } from "react";
import { useRouter, NextRouter } from "next/router";
import { signInWithPopup } from "firebase/auth";

import { useUser } from "../context/user";

import { auth, googleProvider } from "../config/firebase";

export const WaitlistHeader = (): JSX.Element => {
  const router: NextRouter = useRouter();
  // const [refParam, setRefParam] = useState<string | null>(null);

  const userContextValue = useUser();
  const { setUser } = userContextValue ?? {};

  // useEffect(() => {
  //   const { ref } = router.query;
  //   if (typeof ref === "string") {
  //     setRefParam(ref);
  //   }
  // }, [router.query]);

  const signInWithGoogle = useCallback(async () => {
    try {
      await signInWithPopup(auth, googleProvider).then((userCredential) => {
        setUser?.(userCredential.user);
        router.push("/thankyou");
      });
    } catch (err) {
      console.error(err);
    }
  }, [setUser]);

  return (
    <div className="flex flex-col justify-center items-center text-white gap-1 px-4 font-poppins gap-12 py-40 md:py-48">
      <div className="flex flex-col text-center gap-2">
        <p className="text-3xl md:text-7xl font-bold">The next generation</p>
        <p className="text-3xl md:text-7xl font-bold">trading platform</p>
        <p className="text-xl md:text-3xl font-semibold text-golden-light text-center mt-4 md:mt-8">
          Join now for Early Access
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-center">
          <button
            className="h-full px-6 py-3 rounded-xl relative bg-white text-black absolute flex items-center hover:bg-golden"
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
        <p className="text-md md:text-xl text-white text-center">
          Signup using your google account
        </p>
      </div>
    </div>
  );
};
