"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const AnimatedTitle = ({ children }) => {
  const [showLines, setShowLines] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLines(false);
    }, 1500); // Ajusta este tiempo según necesites

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {showLines && (
          <>
            {/* Línea superior */}
            <motion.div
              initial={{ height: "2px" }}
              animate={{ height: "1px" }}
              exit={{ height: "0px", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full bg-white/20"
            />

            {/* Línea inferior */}
            <motion.div
              initial={{ height: "2px" }}
              animate={{ height: "1px" }}
              exit={{ height: "0px", opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 w-full bg-white/20"
            />
          </>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="py-12"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedTitle;
