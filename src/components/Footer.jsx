import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const Footer = () => {
  return (
    <footer className="relative footer footer-center text-white">
      <Spline
        scene="https://prod.spline.design/W0zcOlAli8Lprmvf/scene.splinecode"
        className="absolute top-0 left-0 w-[full] h-full z-[-1]"
      />
      <aside className="m-10">
        <motion.img
          className="size-16"
          src="https://www.dropbox.com/scl/fi/jlfzvvurc7kmhnw7e95x9/thomas-logo.svg?rlkey=br137ioapuw9zuuf08d6q7jti&raw=1"
          whileHover={{ scale: 1.13, transition: { duration: 0.3 } }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          whileTap={{ scale: 0.9 }}
        />
        <motion.p
          className="font-bold"
          whileHover={{ scale: 1.13, transition: { duration: 0.3 } }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          Thomas Hess Bernhardt <br />
          Web Developer since 2023
        </motion.p>
        <motion.p
          whileHover={{ scale: 1.13, transition: { duration: 0.3 } }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          Copyright © 2024 - All right reserved
        </motion.p>
      </aside>
    </footer>
  );
};

export default Footer;
