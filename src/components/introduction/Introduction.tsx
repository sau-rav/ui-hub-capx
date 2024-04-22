import { Heading, HeadingLevel } from "baseui/heading";
import { FeatureCard } from "./components/FeatureCard";

import { FEATURES } from "./constants";

export const Introduction = (): JSX.Element => {
  return (
    <div className="p-16 bg-slate-300 flex flex-col gap-3">
      <div className="flex-1 text-black text-8xl font-bold">XYZ is for</div>
      <div className="flex flex-wrap gap-2 justify-between">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  );
};
