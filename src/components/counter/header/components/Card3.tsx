import { useEffect, useRef } from "react";
import Image from "next/image";

import { motion, useInView, useAnimation } from "framer-motion";

import { useIsMobile } from "../../../../hooks/useIsMobile";

import card3 from "../../../../../public/card3.png";

export const Card3 = (): JSX.Element => {
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
        right: isMobile ? "20px" : "140px",
        bottom: isMobile ? "240px" : "320px",
      }}
      variants={{
        start: { opacity: 0, x: 0, y: -200 },
        end: { opacity: 1, x: 0, y: 0 },
      }}
      initial="start"
      animate={control}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Image src={card3} alt="card1" height={isMobile ? 108 : 160} />
    </motion.div>
  );
};
