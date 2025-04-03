import React, { useState, useEffect } from "react";
import anisha from "../assets/images/avatar-anisha.png";
import ali from "../assets/images/avatar-ali.png";
import richard from "../assets/images/avatar-richard.png";
import shanai from "../assets/images/avatar-shanai.png";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: "Anisha Li",
      avatar: anisha,
      opinion:
        " “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    },
    {
      id: 2,
      name: "Ali Bravo",
      avatar: ali,
      opinion:
        " “We have been able to cancel so many other subscriptions since using  Manage. There is no more cross-channel confusion and everyone is much more focused.”",
    },
    {
      id: 3,
      name: "Richard Watts",
      avatar: richard,
      opinion:
        " “Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
    },
    {
      id: 4,
      name: "Shanai Gough",
      avatar: shanai,
      opinion:
        " “Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.screen.width > 1025) {
        setCurrentIndex((prevIndex) => (prevIndex === 1 ? 0 : prevIndex + 1));
      } else if (window.screen.width > 1280) {
        setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative mx-auto px-4 mt-20 bg-white overflow-hidden w-full">
      <h2
        className="text-center font-bold leading-[1.3] mx-auto text-primary-dark-blue text-3xl 
      lg:text-5xl lg:max-w-[500px] mb-12 max-w-72"
      >
        What they've said
      </h2>
      <div className="relative overflow-hidden lg:overflow-visible w-full max-w-lg mx-auto lg:mx-0 lg:max-w-1/2 xl:max-w-1/3">
        <div
          className="mt-20 flex relative lg:gap-5 transition-transform duration-500 ease-in-out z-100"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full flex-shrink-0 flex justify-center z-100"
            >
              <div className="relative rounded-md p-6 bg-very-light-gray mb-10 max-w-[380px] md:max-w-[500px]">
                <img
                  src={testimonial.avatar}
                  alt="avatar image"
                  className="absolute -top-[50px] left-1/2 -translate-x-1/2 rounded-full w-20 lg:w-24"
                />
                <div className="flex flex-col items-center">
                  <h3 className="text-primary-dark-blue my-5 lg:mt-12 text-lg font-bold">
                    {testimonial.name}
                  </h3>
                  <p className="text-center leading-[1.7] text-darkgrayish-blue">
                    {testimonial.opinion}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ul className="lg:hidden flex items-center justify-center gap-2 mb-10">
          {testimonials.map((_, index) => {
            return (
              <li key={index}>
                <div
                  className={`
                    ${currentIndex === index && "bg-primary-red"}
                     size-2 border border-primary-red rounded-full`}
                ></div>
              </li>
            );
          })}
        </ul>
      </div>
      <button
        className="block mx-auto mb-5 py-3 px-10 bg-primary-red text-white rounded-full
          shadow-primary-red cursor-pointer text-sm shadow-md"
      >
        Get Started
      </button>
    </div>
  );
};

export default Testimonials;
