import React from "react";
import { useEffect } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase";
import { useRouter, NextRouter } from "next/router";
import { Button, KIND, SIZE } from "baseui/button";
import logo from "../../../public/logo.png";

export const JoinWaitlist = (): JSX.Element => {
  const router: NextRouter = useRouter();
  const [refParam, setRefParam] = React.useState<string | null>(null);

  useEffect(() => {
    const { ref } = router.query;
    if (typeof ref === "string") {
      setRefParam(ref);
    }
  }, [router.query]);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider).then((userCredential) => {
        console.log(userCredential);
        if (refParam) {
          router.push(`/dashboard?ref=${refParam}`);
        } else {
          router.push("/dashboard");
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center flex-col justify-center h-screen text-white">
      <div className="text-2xl font-mono max-w-xl px-8 mt-10 text-center">
        Don't worry, we won't handle your money in beta, we will only provide
        you tools to improve your experience and trading journey. You will trade
        via your current brokers like Zerodha, Groww.
      </div>
      <div
        className="mt-8 mb-4 text-4xl font-bold"
        style={{ color: "#ED8E36", marginTop: "100px", marginBottom: "40px" }}
      >
        Join Now
      </div>
      <Button
        onClick={signInWithGoogle}
        kind={KIND.secondary}
        size={SIZE.compact}
        style={{ backgroundColor: "white", color: "black" }}
      >
        <img
          src="https://p1.edge.duggup.com/tpt-icons/google.svg"
          alt="Google Logo"
          className="lg:w-8 h-8 lg:mr-2"
        />
        Signup using Google
      </Button>
      <div
        className="mt-8 mb-4"
        style={{ fontSize: "12px", color: "white", marginTop: "0.5vw" }}
      >
        Signup using google account
      </div>
    </div>
  );
};
