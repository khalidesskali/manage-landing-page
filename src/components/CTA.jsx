import React, { useRef } from "react";
import mobilebg from "../assets/images/bg-simplify-section-mobile.svg";
import laptop from "../assets/images/bg-simplify-section-desktop.svg";
import { motion, useInView } from "framer-motion";

const CTA = () => {
  const ctaRef = useRef(null);
  const isInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ctaRef}
      className="relative h-[350px] lg:h-[240px]
      w-full bg-primary-red mt-15 grid items-center overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div
        className="container mx-auto px-4 flex items-center justify-center 
        flex-col gap-10 lg:flex-row lg:justify-between"
      >
        <motion.img
          src={mobilebg}
          alt="background image"
          className="absolute top-10 left-0 z-10 select-none lg:hidden"
          loading="lazy"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.img
          src={laptop}
          alt=""
          className="hidden lg:inline absolute top-[-50px] left-[330px] select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.h2
          className="font-medium text-very-light-gray text-[2.5rem] md:text-[3rem] text-center lg:text-start
          leading-[1.3] z-20 lg:max-w-[580px]"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Simplify how your team works today.
        </motion.h2>
        <motion.button
          className="block mx-auto mb-5 lg:mb-0 py-3 px-8 lg:mx-0 bg-very-light-gray
          text-primary-red font-bold rounded-full
          shadow-primary-red cursor-pointer text-sm shadow-md"
          whileHover={{ scale: 1.05, backgroundColor: "#f8f8f8" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Get Started
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CTA;
