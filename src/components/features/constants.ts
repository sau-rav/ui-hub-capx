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
      "Do all your research and investing in one place, quickly and efficiently",
    imageSrc: feature1,
    imageUrl: "feature1.png",
  },
  {
    position: "02",
    questionTitle: "Lack of knowledge",
    questionDescription:
      "Lack of right knowledge or guidance to help make trading decisions",
    answerTitle: "How CapX solves this",
    answerDescription:
      "Improve your trading journey with personal guidance and continuous inputs",
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
      "Shorten your learning journey, start quickly, and learn in a way that suits you",
    imageSrc: feature3,
    imageUrl: "feature3.png",
  },
  {
    position: "04",
    questionTitle: "Market Noise",
    questionDescription:
      "Too much noise in the market distracts investors from the correct information",
    answerTitle: "How CapX solves this",
    answerDescription:
      "Actionable information filtered from the noise, making your decisions reliable",
    imageSrc: feature4,
    imageUrl: "feature4.png",
  },
];
