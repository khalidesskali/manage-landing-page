import React from "react";
import charts from "../assets/images/illustration-intro.svg";
import mobilebg from "../assets/images/bg-tablet-pattern.svg";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-between">
        <div className="relative">
          <img
            src={charts}
            alt="illustration intro"
            className="relative z-20 select-none lg:w-[650px] 2xl:w-[800px]"
          />
          <img
            src={mobilebg}
            alt="mobile bg"
            className="absolute left-[20%] -top-[42%] z-10 select-none md:left-[27%] "
          />
        </div>
        <div
          className="flex items-center text-center gap-5 lg:gap-8 flex-col z-30
          lg:-order-1 lg:text-start lg:items-start "
        >
          <h1
            className="font-bold text-4xl md:max-w-[600px] lg:text-5xl 2xl:text-6xl max-w-96 text-primary-dark-blue 
            lg:max-w-[550px] lg:leading-[1.2]"
          >
            Bring everyone together to build better products.
          </h1>
          <p className="text-darkgrayish-blue font-light leading-[1.6] max-w-[320px] md:max-w-[550px] lg:max-w-[350px] mb-3">
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
