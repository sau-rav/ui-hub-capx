import { useEffect, useRef } from "react";
import Image from "next/image";

import { motion, useInView, useAnimation } from "framer-motion";

import { useIsMobile } from "../hooks/useIsMobile";

import waitListHero from "../../public/joinWaitListHero.png";

export const WaitListHeaderHero = (): JSX.Element => {
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
      className="overflow-hidden z-10"
      variants={{
        start: { opacity: 0, x: 0, y: 412, scale: 2 },
        end: { opacity: 1, x: 0, y: 0, scale: 1 },
      }}
      initial="start"
      animate={control}
      transition={{ duration: 0.5, delay: 0 }}
    >
      <Image
        src={waitListHero}
        alt="waitListHero"
        height={isMobile ? 280 : 320}
      />
    </motion.div>
  );
};
