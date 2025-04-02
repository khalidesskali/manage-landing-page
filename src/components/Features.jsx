import React from "react";
import mobilebg from "../assets/images/bg-tablet-pattern.svg";

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

  return (
    <>
      <div className="container mx-auto px-4 mt-16 flex flex-col lg:flex-row lg:justify-between">
        <div className="relative mb-10 lg:mb-0">
          <img
            src={mobilebg}
            className="absolute -top-[170%] left-[66%] md:-top-[286%] -z-10 select-none"
            loading="lazy"
          />
          <h2
            className="text-center font-bold leading-[1.3] mx-auto text-primary-dark-blue
          z-100 text-3xl mb-10 max-w-72 md:max-w-[450px] md:text-4xl lg:text-5xl lg:max-w-[600px]
          lg:text-start"
          >
            What's different about Manage?
          </h2>
          <p
            className="text-center text-darkgrayish-blue max-w-[370px]
          z-100 leading-[1.6] mx-auto md:max-w-[570px] lg:max-w-[400px] lg:text-start lg:mx-0 lg:text-lg"
          >
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>
        <div>
          {features.map((feature) => {
            return (
              <div key={feature.id} className="mb-10">
                <div className="relative mb-3">
                  <span
                    className="absolute left-0 top-1/2 -translate-y-1/2 size-10 flex items-center justify-center
            bg-primary-red py-2 px-10 font-medium rounded-full text-very-light-gray lg:-left-28"
                  >
                    0{feature.id}
                  </span>
                  <span
                    className="bg-very-pale-red lg:bg-transparent py-2 pr-2 pl-15 lg:pl-0 text-primary-dark-blue
                font-bold rounded-tl-[50px] rounded-bl-md block w-full tracking-tight lg:tracking-normal"
                  >
                    {feature.title}
                  </span>
                </div>
                <p className="text-darkgrayish-blue leading-[1.8] text-sm lg:max-w-[400px]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Features;
