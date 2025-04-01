import React from "react";
import mobilebg from "../assets/images/bg-simplify-section-mobile.svg";

const CTA = () => {
  return (
    <div
      className="relative flex items-center justify-center flex-col gap-10 h-[370px]
      w-full bg-primary-red mt-15 p-10"
    >
      <img
        src={mobilebg}
        alt="background image"
        className="absolute top-10 left-0 z-10"
      />
      <h2
        className="font-medium text-very-light-gray text-[2.5rem] text-center
      leading-[1.3] z-20"
      >
        Simplify how your team works today.
      </h2>
      <button
        className="block mx-auto mb-5 py-3 px-8 bg-very-light-gray
        text-primary-red font-bold rounded-full
        shadow-primary-red cursor-pointer text-sm shadow-md"
      >
        Get Started
      </button>
    </div>
  );
};

export default CTA;
