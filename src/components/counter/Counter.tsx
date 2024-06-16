import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useCallback } from "react";
import { useRouter } from "next/router";

const Odometer = dynamic(import("react-odometerjs"), {
  ssr: false,
  loading: () => null,
});

export const Counter = (): JSX.Element => {
  const [odometerValue, setOdometerValue] = useState(504);
  const [triggerCounter, setTriggerCounter] = useState(false);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2 && !triggerCounter) {
      setTriggerCounter(true);
    }
  });

  useEffect(() => {
    if (triggerCounter) {
      setTimeout(() => {
        setOdometerValue(514);
      }, 10);
    }
  }, [triggerCounter]);

  const router = useRouter();

  const handleJoinWaitlist = useCallback(() => {
    router.push("/waitlist");
  }, []);

  return (
    <div ref={ref} className="flex flex-col text-white items-center">
      <div className="text-6xl md:text-9xl font-bold text-white">
        <Odometer
          value={odometerValue}
          format="(,ddd)"
          theme="default"
          duration={1000}
        />
      </div>
      <div className="text-xl md:text-2xl mb-8">
        people have already signed up
      </div>
      <div className="relative">
        <div
          style={{
            border: "4px solid #FE9839",
            filter: "blur(6.524994373321533px)",
          }}
          className="rounded-full absolute flex items-center justify-center p-4 h-full w-full"
        ></div>
        <div>
          <button
            className="h-full w-full px-6 py-3 rounded-full relative bg-golden text-black absolute"
            onClick={handleJoinWaitlist}
          >
            <span>Join Waitlist</span>
          </button>
        </div>
      </div>
    </div>
  );
};
