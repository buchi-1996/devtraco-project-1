import React, { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import { pageSlide, pageTransition } from "../lib/framer-motion";

const Hero = () => {
  const images = [
    {
      desc: "In this article, we will be going to learn how to make",
      img: "../forte1.png",
      link: "",
    },
    {
      desc: "In this article, we will be going to learn how to make",
      img: "../forte1.png",
      link: "",
    },
    {
      desc: "In this article, we will be going to learn how to make",
      img: "../forte1.png",
      link: "",
    },
    {
      desc: "In this article, we will be going to learn how to make",
      img: "../forte1.png",
      link: "",
    },
    {
      desc: "In this article, we will be going to learn how to make",
      img: "../forte1.png",
      link: "",
    },
    {
      desc: "In this article, we will be going to learn how to make",
      img: "../forte1.png",
      link: "",
    },
    {
      desc: "In this article, we will be going to learn how to make",
      img: "../forte1.png",
      link: "",
    },
    {
      desc: "In this article, we will be going to learn how to make",
      img: "../forte1.png",
      link: "",
    },
    {
      desc: "In this article, we will be going to learn how to make",
      img: "../forte1.png",
      link: "",
    },
    {
      desc: "In this article, we will be going to learn how to make",
      img: "../forte1.png",
      link: "",
    },
    {
      desc: "In this article, we will be going to learn how to make",
      img: "../forte1.png",
      link: "",
    },
    {
      desc: "In this article, we will be going to learn how to make",
      img: "../forte1.png",
      link: "",
    },
    {
      desc: "In this article, we will be going to learn how to make",
      img: "../forte1.png",
      link: "",
    },
    {
      desc: "In this article, we will be going to learn how to make",
      img: "../forte1.png",
      link: "",
    },
    {
      desc: "In this article, we will be going to learn how to make",
      img: "../forte1.png",
      link: "",
    },
  ];

  // loop through imgaes in the array using length of the array
  // Add +1 for every foward click of button and -1 for every backward click
  // -translate-y-[27rem] for every fow

  const [screen, setScreen] = useState(0);

  const slideUp = (e) => {
    console.log("clicked", screen);
    if (screen === 0) {
      setScreen((images.length - 1) * 27);
    }
    return setScreen((prev) => prev - 27);
  };

  const slideDown = () => {
    setScreen((prev) => {
      if (prev === (images.length - 1) * 27) {
        setScreen(0);
      }
      return prev + 27;
    });
  };

  return (
    <section className="bg-hero-pattern  bg-cover bg-no-repeat bg-center pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center md:space-x-8">
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageSlide}
            transition={pageTransition}
            className="md:bg-devtraco-blue md:bg-opacity-50 rounded-3xl md:pt-40 pb-10 md:px-14 flex-1"
          >
            <h1 className="text-[3rem] max-w-2xl leading-[120%] text-white">
              Your gateway to lucrative real estate investments.
            </h1>
            <p className="text-white text-sm max-w-xl my-5 leading-[167%]">
              At Devtraco Group, we are passionate about creating exceptional
              real estate developments that transcend expectations. With a rich
              history and a commitment to excellence.
            </p>
            <Button text='About Devtraco' isIcon={true}/>
          </motion.div>
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageSlide}
            transition={pageTransition}
            className="flex flex-row space-x-6 bg-devtraco-blue bg-opacity-50 rounded-3xl box-border min-w-full md:min-w-[26.25rem] place-self-start py-5 pl-5 pr-8"
          >
            <div className="overflow-hidden w-full md:min-w-[19.375rem] h-[27rem] rounded-3xl">
              <div
                style={{ transform: `translateY(-${screen}rem)` }}
                className={`transition-all ease-in-out duration-500 delay-[200ms] slider min-w-max h-full  flex flex-col items-center`}
              >
                {images.map(({ img }, index) => (
                  <img
                    key={index}
                    src={img}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between align-center relative box-border">
              <h1 className="text-[3rem] text-white absolute transform rotate-90 -translate-x-28 translate-y-24 -mt-1 ml-1 ">
                Properties
              </h1>
              <div className="flex flex-col mt-auto space-y-2">
                <button onClick={slideUp}>
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Arrow - Right 3">
                      <g id="Iconly/Light-Outline/Arrow---Right-2">
                        <g id="Arrow---Right-2">
                          <path
                            id="Stroke-1"
                            d="M26.5103 21.9418C26.1553 22.2969 25.5998 22.3291 25.2083 22.0387L25.0961 21.9418L16.4699 13.3161L7.84366 21.9418C7.48864 22.2969 6.93309 22.3291 6.54161 22.0387L6.42945 21.9418C6.07443 21.5868 6.04215 21.0313 6.33263 20.6398L6.42945 20.5276L15.7628 11.1943C16.1178 10.8393 16.6734 10.807 17.0648 11.0975L17.177 11.1943L26.5103 20.5276C26.9009 20.9182 26.9009 21.5513 26.5103 21.9418Z"
                            fill="white"
                          />
                        </g>
                      </g>
                      <rect
                        x="0.904903"
                        y="32.1329"
                        width="31.1296"
                        height="31.1296"
                        rx="15.5648"
                        transform="rotate(-90 0.904903 32.1329)"
                        stroke="white"
                        stroke-width="0.870352"
                      />
                    </g>
                  </svg>
                </button>
                <button onClick={slideDown}>
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Arrow - Right 2">
                      <g id="Iconly/Light-Outline/Arrow---Right-2">
                        <g id="Arrow---Right-2">
                          <path
                            id="Stroke-1"
                            d="M6.42912 11.1944C6.78415 10.8394 7.3397 10.8071 7.73118 11.0976L7.84334 11.1944L16.4696 19.8202L25.0958 11.1944C25.4508 10.8394 26.0064 10.8071 26.3978 11.0976L26.51 11.1944C26.865 11.5494 26.8973 12.105 26.6068 12.4964L26.51 12.6086L17.1767 21.9419C16.8216 22.297 16.2661 22.3292 15.8746 22.0388L15.7625 21.9419L6.42912 12.6086C6.0386 12.2181 6.0386 11.5849 6.42912 11.1944Z"
                            fill="white"
                          />
                        </g>
                      </g>
                      <rect
                        x="32.0346"
                        y="1.00329"
                        width="31.1296"
                        height="31.1296"
                        rx="15.5648"
                        transform="rotate(90 32.0346 1.00329)"
                        stroke="white"
                        stroke-width="0.870352"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-row items-center justify-center mt-10">
        <a href="#about">
          <svg 
          className="animate-bounce"
            width="74"
            height="74"
            viewBox="0 0 74 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 2">
              <circle
                id="Ellipse 1"
                cx="37.1165"
                cy="36.5758"
                r="25.3242"
                transform="rotate(135 37.1165 36.5758)"
                stroke="#F9FAFB"
                stroke-width="1.07763"
              />
              <path
                id="Vector"
                d="M36.7429 23.7401V49.4116M36.7429 49.4116L24.4206 37.0892M36.7429 49.4116L49.0652 37.0892"
                stroke="white"
                stroke-width="1.95951"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
