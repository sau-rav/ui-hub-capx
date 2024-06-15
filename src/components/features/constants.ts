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
      "Daily Indian traders suffer losses due to lack of guidance and self-control",
    answerTitle: "How CapX solves this",
    answerDescription: "Providing an interactive prompt-based research tool",
    imageSrc: feature1,
    imageUrl: "feature1.png",
  },
  {
    position: "02",
    questionTitle: "Market Noise",
    questionDescription:
      "Too much noise in the market distracts investors from the correct information",
    answerTitle: "How CapX solves this",
    answerDescription: "Simple data visualization with actionable insights",
    imageSrc: feature2,
    imageUrl: "feature2.png",
  },
  {
    position: "03",
    questionTitle: "Fear of Starting",
    questionDescription:
      "The absence of a clear, structured learning path has kept many individuals from trading",
    answerTitle: "How CapX solves this",
    answerDescription:
      "Get personalized guide to becoming a professional trader",
    imageSrc: feature3,
    imageUrl: "feature3.png",
  },
  {
    position: "04",
    questionTitle: "Knowledge Gap",
    questionDescription:
      "Investors lack a basic understanding of the fundamentals to make informed decisions",
    answerTitle: "How CapX solves this",
    answerDescription:
      "Get personalized interactive learning at every stage of your investing journey",
    imageSrc: feature4,
    imageUrl: "feature4.png",
  },
];
