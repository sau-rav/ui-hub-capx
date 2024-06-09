import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Odometer = dynamic(import("react-odometerjs"), {
  ssr: false,
  loading: () => null,
});

export const Counter = (): JSX.Element => {
  const [odometerValue, setOdometerValue] = useState(504);

  useEffect(() => {
    setTimeout(() => {
      setOdometerValue(514);
    }, 10);
  }, []);

  return (
    <div className="flex flex-col text-white items-center">
      <div className="text-6xl md:text-9xl font-black text-golden">
        <Odometer
          value={odometerValue}
          format="(,ddd)"
          theme="default"
          duration={1000}
        />
      </div>
      <div className="text-xl md:text-2xl">traders have already signed up</div>
    </div>
  );
};
