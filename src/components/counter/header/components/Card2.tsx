import { useEffect, useRef } from "react";
import Image from "next/image";

import { motion, useInView, useAnimation } from "framer-motion";

import { useIsMobile } from "../../../../hooks/useIsMobile";

import card2 from "../../../../../public/card2.png";

export const Card2 = (): JSX.Element => {
  const isMobile = useIsMobile();

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const control = useAnimation();

  useEffect(() => {
    if (inView) {
      control.start("end");
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className="absolute"
      style={{
        right: isMobile ? undefined : "360px",
        bottom: isMobile ? "60px" : "20px",
        left: isMobile ? "20px" : undefined,
      }}
      variants={{
        start: { opacity: 0, x: 200, y: 200, scale: 2 },
        end: { opacity: 1, x: 0, y: 0, scale: 1 },
      }}
      initial="start"
      animate={control}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      <Image src={card2} alt="card1" height={isMobile ? 162 : 300} />
    </motion.div>
  );
};
