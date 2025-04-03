import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsopen] = useState(false);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <header className="relative h-20 flex z-100">
      {/* Mobile version */}
      <div className="container mx-auto px-4 lg:hidden">
        <div className="flex items-center justify-between h-full">
          <motion.img
            src={logo}
            alt="Logo"
            loading="lazy"
            width={120}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.button
            className="z-100"
            onClick={() => setIsopen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.img
                  key="close"
                  src={close}
                  alt="Close menu icon"
                  loading="lazy"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              ) : (
                <motion.img
                  key="menu"
                  src={menu}
                  alt="Menu icon"
                  loading="lazy"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>
          </motion.button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black opacity-20 z-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex items-center flex-col gap-4 rounded shadow-darkgrayish-blue duration-300
               transition-all absolute left-1/2 -translate-x-1/2 p-10 bg-white
               z-100 w-[95vw]"
            >
              <motion.a href="#" variants={itemVariants}>
                Pricing
              </motion.a>
              <motion.a href="#" variants={itemVariants}>
                Product
              </motion.a>
              <motion.a href="#" variants={itemVariants}>
                About Us
              </motion.a>
              <motion.a href="#" variants={itemVariants}>
                Carrers
              </motion.a>
              <motion.a href="#" variants={itemVariants}>
                Community
              </motion.a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
      {/* Laptop version */}
      <div className="container mx-auto px-4 hidden lg:block">
        <div className="flex items-center justify-between h-full">
          <motion.img
            src={logo}
            alt="Logo"
            loading="lazy"
            width={120}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.nav
            className="laptop-links flex items-center gap-10 text-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#">Pricing</a>
            <a href="#">Product</a>
            <a href="#">About Us</a>
            <a href="#">Carrers</a>
            <a href="#">Community</a>
          </motion.nav>
          <motion.button
            className="block py-3 px-8 bg-primary-red text-white rounded-full 
            cursor-pointer text-sm shadow-lg hover:bg-primary-red/60 duration-300"
            whileHover={{
              backgroundColor: "rgba(242, 95, 58, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
