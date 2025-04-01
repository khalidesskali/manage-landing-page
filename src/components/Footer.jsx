import React from "react";
import fb from "../assets/images/icon-facebook.svg";
import insta from "../assets/images/icon-instagram.svg";
import youtube from "../assets/images/icon-youtube.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className=" bg-very-dark-blue">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row lg:gap-5 lg:justify-between">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex lg:flex-col pt-4 justify-center gap-2 lg:order-2 lg:h-fit lg:pt-0"
          >
            <div className="flex gap-4">
              <input
                type="email"
                // onChange={() => setEmail(e.target.value)}
                placeholder="Updates in your inbox..."
                className={`bg-very-light-gray flex-1 h-14 px-8 rounded-full focus:outline-none border-none
             `}
              />
              <button
                className="block mx-auto py-4 px-8 bg-primary-red
            text-very-light-gray font-bold rounded-full
         cursor-pointer "
              >
                Go
              </button>
            </div>
            <p className="hidden text-sm mt-12 text-left text-darkgrayish-blue lg:block">
              copyright 2020. All rights reserved
            </p>
          </form>

          <div
            className="mt-10 lg:mt-0 text-white flex justify-between sm:justify-around items-center px-5
         lg:order-1 lg:gap-[150px] lg:items-start"
          >
            <div className="flex flex-col gap-4 ">
              <a href="">Home</a>
              <a href="">Pricing</a>
              <a href="">Product</a>
              <a href="">About Us</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="">Carrers</a>
              <a href="">Community</a>
              <a href="">Privacy Policy</a>
            </div>
          </div>
          <div className="mt-13 lg:mt-0 flex flex-col gap-15 items-center lg:-order-1">
            <div className="flex items-center justify-center text-white gap-10 sm:gap-24 lg:gap-4">
              <img width={35} src={fb} alt="social media icon" loading="lazy" />
              <img
                width={35}
                src={youtube}
                alt="social media icon"
                loading="lazy"
              />
              <img
                width={35}
                src={twitter}
                alt="social media icon"
                loading="lazy"
              />
              <img
                width={35}
                src={pinterest}
                alt="social media icon"
                loading="lazy"
              />
              <img
                width={35}
                src={insta}
                alt="social media icon"
                loading="lazy"
              />
            </div>
            <img
              src={logo}
              alt="logo"
              width={200}
              loading="lazy"
              className="lg:-order-1"
            />
          </div>
          <p className="text-sm mt-12 text-center text-darkgrayish-blue lg:hidden">
            copyright 2020. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
