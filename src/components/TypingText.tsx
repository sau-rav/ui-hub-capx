import { useRef } from "react";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const DESCRIPTION =
  "Everything you will ever need for investing is all in one place, from learning, research, information, and data to investing tools. Our platform makes investing faster and easier for everyone, whether you are just getting started or need a helping hand to invest better.";

const DESCRIPTION_WITH_TAGS = DESCRIPTION.split(" ").map((desc, index) => (
  <p data-id={index} id="type">
    {desc}
  </p>
));

const WORD_COUNT = DESCRIPTION_WITH_TAGS.length;

export const TypingText = (): JSX.Element => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "50% start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const typeElements = document.querySelectorAll("#type-container #type");
    const typeOffset = latest - 0.2;
    if (typeOffset <= 0) {
      return;
    }
    const typedIndex = (typeOffset / 0.8) * WORD_COUNT;
    typeElements.forEach((element, index) => {
      // @ts-ignore
      if (element.dataset.id <= typedIndex) {
        element.classList.add("text-white");
      }
    });
  });

  return (
    <motion.div
      className="flex items-center justify-center mb-28 md:mb-48"
      id="type-container"
      ref={ref}
    >
      <div className="text-light-black text-3xl font-bold md:text-6xl flex gap-3 flex-wrap w-9/12 md:w-6/12">
        {DESCRIPTION_WITH_TAGS}
      </div>
    </motion.div>
  );
};
