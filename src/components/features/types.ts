import { StaticImageData } from "next/image";

export type Feature = {
  questionTitle: string;
  questionDescription: string;
  answerTitle: string;
  answerDescription: string;
  position: string;
  imageSrc: StaticImageData;
  imageUrl?: string;
};
