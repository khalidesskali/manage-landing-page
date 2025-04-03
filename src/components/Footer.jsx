import React, { useState, useRef } from "react";
import fb from "../assets/images/icon-facebook.svg";
import insta from "../assets/images/icon-instagram.svg";
import youtube from "../assets/images/icon-youtube.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import logo from "../assets/images/logo.svg";
import { motion, useInView } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please insert a valid email");
    } else {
      setError("");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <motion.footer
      ref={footerRef}
      className="bg-very-dark-blue"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row lg:gap-5 lg:justify-between">
          <motion.form
            onSubmit={handleSubmit}
            className="flex lg:flex-col pt-4 justify-center gap-2 lg:order-2 lg:h-fit lg:pt-0"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="flex flex-col gap-2">
              <div className="flex gap-4">
                <motion.input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Updates in your inbox..."
                  className={`bg-very-light-gray flex-1 h-14 px-8 rounded-full focus:outline-none border-none
                  ${
                    error ? "border-2 border-primary-red text-primary-red" : ""
                  }`}
                  variants={itemVariants}
                />
                <motion.button
                  type="submit"
                  className="block mx-auto py-4 px-8 bg-primary-red
                  text-very-light-gray font-bold rounded-full
                  cursor-pointer hover:bg-opacity-80 transition-all duration-300"
                  variants={itemVariants}
                  whileTap={{ scale: 0.95 }}
                >
                  Go
                </motion.button>
              </div>
              {error && (
                <motion.p
                  className="text-primary-red text-sm pl-8"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {error}
                </motion.p>
              )}
            </div>
            <motion.p
              className="hidden text-sm mt-12 text-right text-darkgrayish-blue lg:block"
              variants={itemVariants}
            >
              copyright 2020. All rights reserved
            </motion.p>
          </motion.form>

          <motion.div
            className="footer-links mt-10 lg:mt-0 flex justify-between sm:justify-around items-center px-5
            lg:order-1 lg:gap-[150px] lg:items-start"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="flex flex-col gap-4"
              variants={containerVariants}
            >
              <motion.a href="" variants={itemVariants}>
                Home
              </motion.a>
              <motion.a href="" variants={itemVariants}>
                Pricing
              </motion.a>
              <motion.a href="" variants={itemVariants}>
                Product
              </motion.a>
              <motion.a href="" variants={itemVariants}>
                About Us
              </motion.a>
            </motion.div>
            <motion.div
              className="flex flex-col gap-4"
              variants={containerVariants}
            >
              <motion.a href="" variants={itemVariants}>
                Carrers
              </motion.a>
              <motion.a href="" variants={itemVariants}>
                Community
              </motion.a>
              <motion.a href="" variants={itemVariants}>
                Privacy Policy
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-13 lg:mt-0 flex flex-col gap-15 items-center lg:-order-1 lg:items-start"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="footer-icons flex items-center justify-center gap-10 sm:gap-24 lg:gap-6"
              variants={containerVariants}
            >
              <motion.img
                className="w-9 lg:w-7 hover:[filter:brightness(0)_saturate(100%)_invert(27%)_sepia(51%)_saturate(2878%)_hue-rotate(346deg)_brightness(104%)_contrast(97%)] transition-all duration-300"
                src={fb}
                alt="social media icon"
                loading="lazy"
                variants={itemVariants}
              />
              <motion.img
                className="w-9 lg:w-7 hover:[filter:brightness(0)_saturate(100%)_invert(27%)_sepia(51%)_saturate(2878%)_hue-rotate(346deg)_brightness(104%)_contrast(97%)] transition-all duration-300"
                src={youtube}
                alt="social media icon"
                loading="lazy"
                variants={itemVariants}
              />
              <motion.img
                className="w-9 lg:w-7 hover:[filter:brightness(0)_saturate(100%)_invert(27%)_sepia(51%)_saturate(2878%)_hue-rotate(346deg)_brightness(104%)_contrast(97%)] transition-all duration-300"
                src={twitter}
                alt="social media icon"
                loading="lazy"
                variants={itemVariants}
              />
              <motion.img
                className="w-9 lg:w-7 hover:[filter:brightness(0)_saturate(100%)_invert(27%)_sepia(51%)_saturate(2878%)_hue-rotate(346deg)_brightness(104%)_contrast(97%)] transition-all duration-300"
                src={pinterest}
                alt="social media icon"
                loading="lazy"
                variants={itemVariants}
              />
              <motion.img
                className="w-9 lg:w-7 hover:[filter:brightness(0)_saturate(100%)_invert(27%)_sepia(51%)_saturate(2878%)_hue-rotate(346deg)_brightness(104%)_contrast(97%)] transition-all duration-300"
                src={insta}
                alt="social media icon"
                loading="lazy"
                variants={itemVariants}
              />
            </motion.div>
            <motion.img
              src={logo}
              alt="logo"
              width={200}
              loading="lazy"
              className="lg:-order-1 [filter:brightness(0)_invert(1)]"
              variants={itemVariants}
            />
          </motion.div>
          <motion.p
            className="text-sm mt-12 text-center text-darkgrayish-blue lg:hidden"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            copyright 2020. All rights reserved
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
