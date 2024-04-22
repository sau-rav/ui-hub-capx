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
    <div>
      <div className="flex items-center justify-center py-4 px-36 bg-black">
        <div
          className="flex-1 flex items-center gap-2 text-white text-5xl font-bold"
          style={{ color: "#EDAF36" }}
        >
          Cap X
        </div>
      </div>
      <div className="text-white flex flex-col justify-center text-center bg-hero-image bg-cover py-36">
        <div className="text-3xl lg:text-4xl md:text-3xl font-montserrat"></div>
        <div className="text-5xl lg:text-9xl md:text-7xl font-mono">Cap</div>
        <div className="text-2xl font-mono">
          Personalized gamified trading platform!
        </div>
      </div>
      <div className="flex justify-center items-center" style={{ minHeight: "calc(100vh - 400px)", backgroundColor: "black" }}>
        <div></div>
        <Button
          onClick={signInWithGoogle}
          kind={KIND.secondary}
          size={SIZE.compact}
          style={{ backgroundColor: "#EDAF36" }}
        >
          SignIn With Google
        </Button>
      </div>
    </div>
  );
};
