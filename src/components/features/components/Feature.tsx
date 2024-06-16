import Image from "next/image";

import { Feature as FeatureType } from "../types";
import { FadeInOut } from "../../FadeInOut";

import { useIsMobile } from "../../../hooks/useIsMobile";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Feature = ({
  questionTitle,
  questionDescription,
  answerTitle,
  answerDescription,
  position,
  imageSrc,
}: FeatureType): JSX.Element => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });

  const isMobile = useIsMobile();

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="flex flex-col w-full"
    >
      <div className="text-white w-full bg-light-black rounded-t-xl p-6 md:p-10 flex gap-6">
        {isMobile ? null : (
          <div className="bg-white rounded-full md:h-10 md:w-10 text-light-black flex items-center justify-center text-lg md:text-xl flex-none">
            {position}
          </div>
        )}
        <div className="flex flex-col flex-1 text-xl md:text-2xl gap-3">
          <div className="font-bold">{questionTitle}</div>
          <div>{questionDescription}</div>
        </div>
      </div>
      <div
        className={`text-light-black w-full bg-white rounded-b-xl p-4 md:p-10 flex gap-6 gap-10 ${
          isMobile ? "flex-col-reverse" : ""
        }`}
      >
        <div className="flex flex-col justify-center flex-1">
          <p className="flex-none font-bold text-md md:text-lg">
            {answerTitle}
          </p>
          <p className="flex-1 flex items-center text-2xl md:text-3xl">
            {answerDescription}
          </p>
        </div>
        <div className="flex-1">
          <Image src={imageSrc} alt="feature" />
        </div>
      </div>
    </motion.div>
  );
};

export const FeatureV2 = ({
  imageUrl,
  answerTitle,
  answerDescription,
  children,
  questionTitle,
  questionDescription,
}: {
  imageUrl: string;
  answerTitle: string;
  answerDescription: string;
  children?: JSX.Element;
  questionTitle: string;
  questionDescription: string;
}): JSX.Element => {
  return (
    <div className="w-full">
      <Question title={questionTitle} description={questionDescription} />
      <div className="relative h-[150vh]">
        <StickyImage imageUrl={imageUrl}></StickyImage>
        <Solution title={answerTitle} description={answerDescription} />
      </div>
    </div>
  );
};

const StickyImage = ({ imageUrl }: { imageUrl: string }): JSX.Element => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        top: 0,
        scale,
      }}
      className="sticky overflow-hidden"
    >
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-neutral-950/70"
      />
    </motion.div>
  );
};

const Solution = ({
  title,
  description,
}: {
  title: string;
  description: string;
}): JSX.Element => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="text-white absolute left-0 top-0 h-screen w-full flex flex-col items-center justify-center px-8 md:px-16 lg:px-24"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">{title}</p>
      <p className="text-center text-4xl font-bold md:text-7xl">
        {description}
      </p>
    </motion.div>
  );
};

const Question = ({
  title,
  description,
}: {
  title: string;
  description: string;
}): JSX.Element => {
  return (
    <FadeInOut>
      <div className="flex flex-col w-full justify-center items-center text-white gap-10 px-10">
        <p className="text-3xl font-bold md:text-5xl">{title}</p>
        <p className="text-xl md:mb-4 md:text-3xl">{description}</p>
      </div>
    </FadeInOut>
  );
};
