import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useCallback } from "react";
import { useRouter } from "next/router";

import { useUser } from "../../context/user";
import { useUsersCount } from "../../hooks/useUsersCount";

const Odometer = dynamic(import("react-odometerjs"), {
  ssr: false,
  loading: () => null,
});

const WAITLIST_ROUTE = "/join-waitlist";

export const Counter = ({
  hideJoinWaitlistButton,
  className,
}: {
  hideJoinWaitlistButton?: boolean;
  className?: string;
}): JSX.Element => {
  const [odometerValue, setOdometerValue] = useState<number>(900);
  const [complete, setComplete] = useState(false);
  const [triggerCounter, setTriggerCounter] = useState(false);

  const userContext = useUser();

  const { users, isLoading } = useUsersCount();

  const { user, setUser } = userContext ?? {};

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0 && !triggerCounter) {
      setTriggerCounter(true);
    }
  });

  useEffect(() => {
    if (!isLoading && users) {
      if (triggerCounter) {
        setTimeout(() => {
          setOdometerValue(users);
        }, 50);
      }
      if (triggerCounter) {
        setTimeout(() => {
          setComplete(true);
        }, 2000);
      }
    }
  }, [triggerCounter, isLoading, users]);

  const router = useRouter();

  const handleJoinWaitlist = useCallback(() => {
    const { query } = router;

    router.push(
      `${WAITLIST_ROUTE}?${new URLSearchParams(
        query as unknown as string
      ).toString()}`
    );
  }, [router]);

  let primaryButtonEl;
  if (!user && !hideJoinWaitlistButton) {
    primaryButtonEl = (
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
            className="h-full w-full px-6 py-3 rounded-full relative bg-golden text-black absolute hover:font-bold"
            onClick={handleJoinWaitlist}
          >
            <span>Join Waitlist</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`flex flex-col text-white items-center ${className}`}
    >
      <div
        className={`text-6xl md:text-9xl font-bold text-golden flex items-center`}
      >
        <Odometer
          value={odometerValue}
          format="(,ddd)"
          theme="default"
          duration={1000}
        />
        {complete ? "+" : ""}
      </div>
      <div className="text-xl md:text-2xl mb-8">
        people have already signed up
      </div>
      {primaryButtonEl}
    </div>
  );
};
