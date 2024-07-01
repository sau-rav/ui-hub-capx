import { useEffect, useRef } from "react";
import Image from "next/image";

import { motion, useInView, useAnimation } from "framer-motion";

import { useIsMobile } from "../../../../hooks/useIsMobile";

import whiteLine from "../../../../../public/whiteLine.png";

export const LineWhite = (): JSX.Element => {
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
        right: "0px",
        bottom: "0px",
      }}
      variants={{
        start: { opacity: 0, x: 200 },
        end: { opacity: 1, x: 0 },
      }}
      initial="start"
      animate={control}
      transition={{ duration: 0.5, delay: 0 }}
    >
      <Image src={whiteLine} alt="card1" height={640} />
    </motion.div>
  );
};
