import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      whileHover={{ scale: 1.01 }}
      className="flex justify-between items-center p-5 bg-black"
    >
      <div className="flex logo text-xl">
        {/* Brand Logo or Name */}
        <motion.img
          className="size-12"
          src="https://www.dropbox.com/scl/fi/jlfzvvurc7kmhnw7e95x9/thomas-logo.svg?rlkey=br137ioapuw9zuuf08d6q7jti&raw=1"
          whileHover={{ scale: 0.9, transition: { duration: 0.3 } }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          whileTap={{ scale: 1.05 }}
        />
        <motion.p
          className="font-sans self-center pl-2 text-white"
          whileHover={{ scale: 0.9, transition: { duration: 0.3 } }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          whileTap={{ scale: 1.05 }}
        >
          Thomas Hess B.
        </motion.p>
      </div>
    </motion.header>
  );
};

export default Header;
