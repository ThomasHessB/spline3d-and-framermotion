import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function EndHero() {
  return (
    <div>
      <div>
        <Spline scene="https://prod.spline.design/qHv-ClMl9xgkxwS8/scene.splinecode" />
      </div>
      <div className="bg-black flex flex-col items-center justify-center text-center">
        <motion.h1
          className="text-4xl font-bold text-white"
          whileHover={{ scale: 0.9, transition: { duration: 0.3 } }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          whileTap={{ scale: 1.05 }}
        >
          More than just a product...
        </motion.h1>
        <motion.h2
          className="text-2xl text-white m-4"
          whileHover={{ scale: 0.9, transition: { duration: 0.3 } }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          whileTap={{ scale: 1.05 }}
        >
          We offer a new lifestyle!
        </motion.h2>
      </div>
    </div>
  );
}
