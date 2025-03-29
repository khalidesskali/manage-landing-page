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
    <div className="container mx-auto px-4 mt-16">
      <div className="relative mb-10">
        <img
          src={mobilebg}
          className="absolute -top-[170%] left-[66%] z-10"
          alt=""
        />
        <h2 className="text-center font-bold leading-[1.3] mx-auto text-primary-dark-blue text-3xl mb-10 max-w-72">
          What's different about Manage?
        </h2>
        <p className="text-center text-darkgrayish-blue max-w-[370px] leading-[1.6] mx-auto">
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
                  className="absolute left-0 top-1/2 -translate-y-1/2
            bg-primary-red py-2 px-4 rounded-full text-very-light-gray "
                >
                  0{feature.id}
                </span>
                <span
                  className="bg-very-pale-red py-2 pr-4 pl-16 text-primary-dark-blue 
                font-bold rounded-tl-md rounded-bl-md block w-full"
                >
                  {feature.title}
                </span>
              </div>
              <p className="text-darkgrayish-blue leading-[1.8] font-light">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
