import React from "react";
import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function CTASection() {
  return (
    <div className="flex items-center justify-center h-screen overflow-hidden bg-black border-8 border-black">
      <div className="flex justify-center items-center">
        <Spline
          scene="https://prod.spline.design/tLbC4FeMol7acK30/scene.splinecode"
          style={{ width: "1200px", height: "1200px" }}
        />
      </div>
      <motion.div
        className="absolute flex flex-col items-center justify-center text-center p-4 bg-opacity-50"
        whileHover={{ scale: 0.94, transition: { duration: 0.3 } }}
        transition={{ type: "spring", stiffness: 800, damping: 8 }}
        whileTap={{ scale: 1.04 }}
      >
        <motion.h1
          className="text-4xl font-bold text-white "
          whileHover={{ scale: 0.9, transition: { duration: 0.3 } }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          whileTap={{ scale: 1.05 }}
        >
          Ready to make a change?
        </motion.h1>
        <motion.p
          className="text-xl text-white m-4 "
          whileHover={{ scale: 0.9, transition: { duration: 0.3 } }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          whileTap={{ scale: 1.05 }}
        >
          Join us and transform your experience!
        </motion.p>
        <nav className="hidden md:block ">
          {/* Desktop Navigation Links */}
          <a href="https://wa.me/5547996235145">
            <motion.i
              className="btn bg-green-600 w-16 h-16 mr-5"
              whileHover={{ scale: 0.9, transition: { duration: 0.3 } }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              whileTap={{ scale: 1.05 }}
            >
              <FaWhatsapp />
            </motion.i>
          </a>
          <a href="https://www.instagram.com/thomasalemao.wav/">
            <motion.i
              className="btn bg-pink-500 w-16 h-16 ml-5"
              whileHover={{ scale: 0.9, transition: { duration: 0.3 } }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              whileTap={{ scale: 1.05 }}
            >
              <FaInstagram />
            </motion.i>
          </a>
        </nav>
        {/* Additional content */}
      </motion.div>
    </div>
  );
}
