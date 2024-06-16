import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const FadeInOut = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.div ref={ref} style={{ opacity }}>
      {children}
    </motion.div>
  );
};
