import { useEffect, useRef } from "react";
import Image from "next/image";

import { motion, useInView, useAnimation } from "framer-motion";

import { useIsMobile } from "../../../../hooks/useIsMobile";

import lineOrange from "../../../../../public/lineOrange.png";

export const LineGolden = (): JSX.Element => {
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
        start: { opacity: 0, x: 200, y: 60 },
        end: { opacity: 1, x: 0, y: 0 },
      }}
      initial="start"
      animate={control}
      transition={{ duration: 1, delay: 0 }}
    >
      <Image src={lineOrange} alt="card1" height={640} />
    </motion.div>
  );
};
