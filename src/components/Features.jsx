import React, { useRef } from "react";
import mobilebg from "../assets/images/bg-tablet-pattern.svg";
import { motion, useInView } from "framer-motion";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Track company-wide progress",
      description:
        " See how your day-to-day tasks fit into the wider vision. Go from  tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
      id: 2,
      title: "Advanced built-in reports",
      description:
        " Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },
    {
      id: 3,
      title: "Everything you need in one place",
      description:
        "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    },
  ];

  const leftSectionRef = useRef(null);
  const featuresRef = useRef(null);
  const isLeftSectionInView = useInView(leftSectionRef, {
    once: true,
    margin: "-100px",
  });
  const isFeaturesInView = useInView(featuresRef, {
    once: true,
    margin: "-100px",
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="container mx-auto px-4 mt-16 flex flex-col lg:flex-row lg:justify-between">
        <motion.div
          ref={leftSectionRef}
          className="relative mb-10 lg:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={
            isLeftSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.img
            src={mobilebg}
            className="absolute -top-[170%] left-[66%] md:-top-[286%]
            lg:top-[60%] lg:-left-1/2 lg:z-10 -z-10 select-none 2xl:max-w-[700px] 2xl:-left-[90%]"
            loading="lazy"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isLeftSectionInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.8, delay: 0.3 }}
            alt="Bg image"
          />
          <motion.h2
            className="text-center font-bold leading-[1.3] mx-auto text-primary-dark-blue
            z-100 text-3xl mb-10 max-w-72 md:max-w-[450px] md:text-4xl xl:text-5xl xl:max-w-[600px]
            lg:text-start"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isLeftSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            What's different about Manage?
          </motion.h2>
          <motion.p
            className="text-center text-darkgrayish-blue max-w-[370px]
            z-100 leading-[1.6] mx-auto md:max-w-[570px] lg:max-w-[400px] lg:text-start lg:mx-0 lg:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isLeftSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </motion.p>
        </motion.div>
        <motion.div
          ref={featuresRef}
          variants={containerVariants}
          initial="hidden"
          animate={isFeaturesInView ? "visible" : "hidden"}
        >
          {features.map((feature) => {
            return (
              <motion.div
                key={feature.id}
                className="mb-10"
                variants={itemVariants}
              >
                <div className="relative mb-3">
                  <motion.span
                    className="absolute left-0 top-1/2 -translate-y-1/2 size-10 flex items-center justify-center
                    bg-primary-red py-2 px-6 lg:px-10 font-medium rounded-full text-very-light-gray lg:-left-28"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    0{feature.id}
                  </motion.span>
                  <motion.span
                    className="bg-very-pale-red lg:bg-transparent py-2 pr-2 pl-15 lg:pl-0 text-primary-dark-blue
                    font-bold rounded-tl-[50px] rounded-bl-md block w-full tracking-tight lg:tracking-normal"
                    whileHover={{ x: 5 }}
                  >
                    {feature.title}
                  </motion.span>
                </div>
                <motion.p
                  className="text-darkgrayish-blue leading-[1.8] text-sm lg:max-w-[400px] lg:text-base"
                  initial={{ opacity: 0 }}
                  animate={isFeaturesInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default Features;
