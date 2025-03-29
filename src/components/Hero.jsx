import React from "react";
import charts from "../assets/images/illustration-intro.svg";
import mobilebg from "../assets/images/bg-tablet-pattern.svg";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="flex flex-col items-center gap-5">
        <div className="relative">
          <img
            src={charts}
            alt="illustration intro"
            className="relative z-20"
          />
          <img
            src={mobilebg}
            alt="mobile bg"
            className="absolute left-[15%] -top-[42%] z-10"
          />
        </div>
        <div className="flex items-center text-center gap-5 flex-col z-30">
          <h1 className="font-bold text-4xl max-w-96 text-primary-dark-blue">
            Bring everyone together to build better products.
          </h1>
          <p className="text-darkgrayish-blue font-light max-w-[320px] mb-3">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button
            className="block mb-5 py-3 px-10 bg-primary-red text-white rounded-full
          shadow-primary-red cursor-pointer text-sm shadow-md"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
