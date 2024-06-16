import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { useInView } from "framer-motion";

const Odometer = dynamic(import("react-odometerjs"), {
  ssr: false,
  loading: () => null,
});

export const Counter = (): JSX.Element => {
  const [odometerValue, setOdometerValue] = useState(504);
  const ref = useRef(null);

  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setOdometerValue(514);
      }, 10);
    }
  }, [inView]);

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
      <div className="bg-gradient-to-r from-golden to-golden-light-light rounded-2xl p-1 justify-end">
        <button className="h-full w-full px-6 py-3 rounded-xl md:rounded-2xl font-bold relative bg-transparent text-black">
          <span>Join Waitlist</span>
        </button>
      </div>
    </div>
  );
};
