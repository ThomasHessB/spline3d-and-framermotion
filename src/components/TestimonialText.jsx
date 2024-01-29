import React from "react";
import { motion } from "framer-motion";

export default function TestimonialText() {
  return (
    <div className="bg-black flex flex-col items-center justify-center text-center">
      <motion.h1
        className="text-4xl font-bold text-white"
        whileHover={{ scale: 0.9, transition: { duration: 0.3 } }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        whileTap={{ scale: 1.05 }}
      >
        We have customers worldwide!
      </motion.h1>
      <motion.p
        className="text-xl text-white m-4"
        whileHover={{ scale: 0.9, transition: { duration: 0.3 } }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        whileTap={{ scale: 1.05 }}
      >
        Here is some testimonials of their experience!
      </motion.p>
    </div>
  );
}
