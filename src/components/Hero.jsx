import React from "react";
import charts from "../assets/images/illustration-intro.svg";
import mobilebg from "../assets/images/bg-tablet-pattern.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-between">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src={charts}
            alt="illustration intro"
            className="relative z-20 select-none lg:w-[650px] 2xl:w-[800px]"
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={mobilebg}
            alt="mobile bg"
            className="absolute left-[20%] -top-[42%] z-10 select-none md:left-[27%]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
        <motion.div
          className="flex items-center text-center gap-5 lg:gap-8 flex-col z-30
          lg:-order-1 lg:text-start lg:items-start"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="font-bold text-4xl md:max-w-[600px] lg:text-5xl 2xl:text-6xl max-w-96 text-primary-dark-blue
            lg:max-w-[550px] lg:leading-[1.2]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Bring everyone together to build better products.
          </motion.h1>
          <motion.p
            className="text-darkgrayish-blue font-light leading-[1.6] max-w-[320px] md:max-w-[550px] lg:max-w-[350px] mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </motion.p>
          <motion.button
            className="block mb-5 py-3 px-10 bg-primary-red text-white rounded-full
            cursor-pointer text-sm shadow-md shadow-primary-red/60 duration-300
            hover:bg-primary-red/70"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
