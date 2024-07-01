import { useRef, useEffect } from "react";

import { motion, useInView, useAnimation } from "framer-motion";

type Props = {
  children: JSX.Element;
  sliderColor?: string;
};

export const Reveal = ({
  children,
  sliderColor = "#ED8E36",
}: Props): JSX.Element => {
  const ref = useRef(null);

  const inView = useInView(ref, { once: true });

  const scrollControl = useAnimation();
  const slideControl = useAnimation();

  useEffect(() => {
    if (inView) {
      scrollControl.start("end");
      slideControl.start("right");
    }
  }, [inView]);

  return (
    <div ref={ref} className="relative w-fit overflow-hidden pb-2">
      {children}
      {/* <motion.div
        variants={{ start: { opacity: 0, x: 75 }, end: { opacity: 1, x: 0 } }}
        initial="start"
        animate={scrollControl}
        transition={{ duration: 0.5, delay: 0 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          left: { left: 0 },
          right: { left: "100%" },
        }}
        initial="left"
        animate={slideControl}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          opacity: 1,
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          background: sliderColor,
        }}
      ></motion.div> */}
    </div>
  );
};
