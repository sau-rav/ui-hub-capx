import { useState, useCallback } from "react";

import { Questions } from "./questions";
import { motion } from "framer-motion";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export const FAQ = (): JSX.Element => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = useCallback(() => {
    setExpanded((prev) => !prev);
  }, []);

  return (
    <motion.div layout>
      <motion.div
        layout
        className="text-golden flex items-center gap-4 justify-center text-2xl lg:text-5xl md:text-3xl lg:pt-36 md:pt-30 pt-24 lg:pb-28 md:pt-24 pt-16 px-8 md:px-16 font-semibold text-center cursor-pointer"
        onClick={toggleExpansion}
      >
        Frequently Asked Questions
        {expanded ? (
          <ExpandLessIcon fontSize="large" />
        ) : (
          <ExpandMoreIcon fontSize="large" />
        )}
      </motion.div>
      <motion.div layout>{expanded ? <Questions /> : null}</motion.div>
    </motion.div>
  );
};
