import React from "react";
import mobilebg from "../assets/images/bg-simplify-section-mobile.svg";
import laptop from "../assets/images/bg-simplify-section-desktop.svg";

const CTA = () => {
  return (
    <div
      className="relative h-[350px] lg:h-[240px]
      w-full bg-primary-red mt-15 grid items-center overflow-hidden"
    >
      <div
        className="container mx-auto px-4 flex items-center justify-center 
        flex-col gap-10 lg:flex-row lg:justify-between"
      >
        <img
          src={mobilebg}
          alt="background image"
          className="absolute top-10 left-0 z-10 select-none lg:hidden"
          loading="lazy"
        />
        <img
          src={laptop}
          alt=""
          className="hidden lg:inline absolute top-[-50px] left-[330px] select-none"
        />
        <h2
          className="font-medium text-very-light-gray text-[2.5rem] md:text-[3rem] text-center lg:text-start
          leading-[1.3] z-20 lg:max-w-[580px]"
        >
          Simplify how your team works today.
        </h2>
        <button
          className="block mx-auto mb-5 lg:mb-0 py-3 px-8 lg:mx-0 bg-very-light-gray
        text-primary-red font-bold rounded-full
        shadow-primary-red cursor-pointer text-sm shadow-md"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CTA;
