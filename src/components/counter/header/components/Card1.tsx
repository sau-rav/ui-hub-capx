import { useEffect, useRef } from "react";
import Image from "next/image";

import { motion, useInView, useAnimation } from "framer-motion";

import { useIsMobile } from "../../../../hooks/useIsMobile";

import card1 from "../../../../../public/card1.png";

export const Card1 = (): JSX.Element | null => {
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
      style={{ right: "20px", bottom: "20px" }}
      variants={{
        start: { opacity: 0, x: -200, y: -400, scale: 2 },
        end: { opacity: 1, x: 0, y: 0, scale: 1 },
      }}
      initial="start"
      animate={control}
      transition={{ duration: 1, delay: 1 }}
    >
      <Image src={card1} alt="card1" height={260} />
    </motion.div>
  );
};
