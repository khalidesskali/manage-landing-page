import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import menu from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";

const Header = () => {
  const [isOpen, setIsopen] = useState(false);

  return (
    <header className="relative h-20 flex z-100">
      {/* Mobile version */}
      <div className="container mx-auto px-4 lg:hidden">
        <div className="flex items-center justify-between h-full">
          <img src={logo} alt="Logo" loading="lazy" width={120} />
          <button className="z-100" onClick={() => setIsopen(!isOpen)}>
            {isOpen ? (
              <img src={close} alt="Close menu icon" loading="lazy" />
            ) : (
              <img src={menu} alt="Menu icon" loading="lazy" />
            )}
          </button>
        </div>
        {isOpen && (
          <div className="fixed inset-0 bg-black opacity-20 z-80"></div>
        )}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } items-center flex-col gap-4 rounded shadow-darkgrayish-blue duration-300
           transition-all absolute left-1/2 -translate-x-1/2 2 p-10 bg-white
           starting:opacity-0 starting:translate-y-2.5 z-100 w-[95vw]`}
        >
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Carrers</a>
          <a href="#">Community</a>
        </nav>
      </div>
      {/* Laptop version */}
      <div className="container mx-auto px-4 hidden lg:block">
        <div className="flex items-center justify-between h-full">
          <img src={logo} alt="Logo" loading="lazy" width={120} />
          <nav className="flex items-center gap-10 text-sm">
            <a href="#" className="text-primary-dark-blue font-medium">
              Pricing
            </a>
            <a href="#" className="text-primary-dark-blue ">
              Product
            </a>
            <a href="#" className="text-primary-dark-blue ">
              About Us
            </a>
            <a href="#" className="text-primary-dark-blue ">
              Carrers
            </a>
            <a href="#" className="text-primary-dark-blue ">
              Community
            </a>
          </nav>
          <button
            className="block py-3 px-8 bg-primary-red text-white rounded-full 
            cursor-pointer text-sm shadow-lg shadow-very-pale-red"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
