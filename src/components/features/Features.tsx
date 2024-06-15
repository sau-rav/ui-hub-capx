import { FeatureV2, Feature } from "./components/Feature";
import { FadeInOut } from "../FadeInOut";

import { FEATURES } from "./constants";

export const Features = (): JSX.Element => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center text-white w-full">
        <FadeInOut>
          <p className="text-4xl font-bold md:text-7xl mb-32 px-10">
            How CapX does things differently
          </p>
        </FadeInOut>
        {FEATURES.map((feature) => (
          <FeatureV2
            answerTitle={feature.answerTitle}
            answerDescription={feature.answerDescription}
            questionTitle={feature.questionTitle}
            questionDescription={feature.questionDescription}
            imageUrl={feature.imageUrl || "feature1.png"}
          />
        ))}
      </div>
    </div>
  );
};
