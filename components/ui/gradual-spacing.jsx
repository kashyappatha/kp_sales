"use client";;
import { AnimatePresence, motion } from "framer-motion";

// import { cn } from "@/lib/utils";

export default function GradualSpacing({
  text,
  duration = 10,
  delayMultiple = 0.2,

  framerProps = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 },
  },

  className
}) {
  return (
    (<div className="flex justify-left space-x-1 mb-1">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h3
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className={("drop-shadow-sm ", className)}>
            {char === " " ? <span>&nbsp;</span> : char}
          </motion.h3>
        ))}
      </AnimatePresence>
    </div>)
  );
}
