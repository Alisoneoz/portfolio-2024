"use client";
import { motion } from 'framer-motion';
import React from 'react';

const AnimatedSection = ({ children, className }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }} // Desplazamiento vertical para un efecto de deslizamiento hacia arriba
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }} // Configuración del viewport
      transition={{ duration: 0.4, ease: "easeOut" }} // Ajusta la duración y el easing para un efecto más suave
      className={`w-full px-8 sm:px-10 md:px-30 lg:px-30 xl:px-40 py-8 md:py-10 lg:py-20 ${className || ''}`}
      
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
