import feature1 from "../../../public/feature1.png";
import feature2 from "../../../public/feature2.png";
import feature3 from "../../../public/feature3.png";
import feature4 from "../../../public/feature4.png";

import { Feature } from "./types";

export const FEATURES: Feature[] = [
  {
    position: "01",
    questionTitle: "Lack of Time",
    questionDescription:
      "Not enough time to research and make informed trading decisions",
    answerTitle: "How CapX solves this",
    answerDescription:
      "Make all your trading decisions in the fastest way possible",
    imageSrc: feature1,
    imageUrl: "feature1.png",
  },
  {
    position: "02",
    questionTitle: "Lack of knowledge",
    questionDescription:
      "Lack of basic knowledge or understanding to make trading decisions",
    answerTitle: "How CapX solves this",
    answerDescription:
      "Personalized guidance at every stage to help you get better",
    imageSrc: feature2,
    imageUrl: "feature2.png",
  },
  {
    position: "03",
    questionTitle: "Fear of starting",
    questionDescription:
      "The absence of a clear, structured learning path has kept many individuals from trading",
    answerTitle: "How CapX solves this",
    answerDescription:
      "Get a personalized starting path to get you started faster",
    imageSrc: feature3,
    imageUrl: "feature3.png",
  },
  {
    position: "04",
    questionTitle: "Market Noise",
    questionDescription:
      "Too much information in the market, leading to confusion and distraction",
    answerTitle: "How CapX solves this",
    answerDescription: " See only the data you need for the right decisions",
    imageSrc: feature4,
    imageUrl: "feature4.png",
  },
];
