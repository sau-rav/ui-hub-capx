import { FeatureV2, Feature } from "./components/Feature";
import { FadeInOut } from "../FadeInOut";

import { FEATURES } from "./constants";

export const Features = (): JSX.Element => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center text-white w-full md:w-9/12 gap-16 md:gap-32 px-4 md:px-0">
        <FadeInOut>
          <p className="text-4xl font-bold md:text-7xl text-center">
            How CapX does things differently
          </p>
        </FadeInOut>
        {FEATURES.map((feature) => (
          <Feature
            answerTitle={feature.answerTitle}
            answerDescription={feature.answerDescription}
            questionTitle={feature.questionTitle}
            questionDescription={feature.questionDescription}
            imageUrl={feature.imageUrl || "feature1.png"}
            position={feature.position}
            imageSrc={feature.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};
