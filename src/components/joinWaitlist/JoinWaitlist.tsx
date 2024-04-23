import React from "react";
import { useEffect } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../config/firebase";
import { useRouter, NextRouter } from "next/router";
import { Button, KIND, SIZE } from "baseui/button";

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
      await signInWithPopup(auth, googleProvider)
        .then((userCredential) => {
          console.log(userCredential);
          if (refParam) {
            router.push(`/dashboard?ref=${refParam}`);
          } else {
            router.push('/dashboard');
          }
        });
    } catch (err){
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <div className="flex items-center justify-between py-2 px-6 lg:px-36">
        <div className="flex items-center gap-2 text-3xl lg:text-5xl font-bold" style={{ color: "#EDAF36" }}>
          Cap X
        </div>
      </div>
      <div className="flex-grow flex flex-col justify-center items-center text-left">
        <div className="text-2xl font-mono max-w-xl px-8" style={{ marginTop: "-80px"}}>
          Don't worry, we won't handle your money in beta, we will only provide you tools to improve your experience and trading journey. You will trade via your current brokers like Zerodha, Groww.
        </div>
        <div className="mt-8 mb-4 text-4xl font-bold" style={{ color: "#EDAF36", marginTop: "100px" }}>Join Now</div>
        <Button
          onClick={signInWithGoogle}
          kind={KIND.secondary}
          size={SIZE.compact}
          style={{ backgroundColor: "white", color: "black" }}
        >
          <img src="https://p1.edge.duggup.com/tpt-icons/google.svg" alt="Google Logo" className="lg:w-8 h-8 lg:mr-2" />
          Signup using Google
        </Button>
        <div className="mt-8 mb-4" style={{ fontSize: "12px", color: "white", marginTop: "0.5vw" }}>Signup using google account</div>
      </div>
    </div>
  );
};
