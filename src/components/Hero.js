import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// import { useLocation } from "react-router-dom";
import Button from "./Button";
import { motion } from "framer-motion";
import { pageSlide, pageTransition } from "../lib/framer-motion";
import { headerRoutes } from "../routes/routes";

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

const Hero = () => {
  const [screen, setScreen] = useState(0);
  const [height, setHeight] = useState(0);

  const ref = useRef(null);


  useLayoutEffect(() => {
    function handleResize() {
      if (ref.current) {
        const height = Math.floor(ref.current.offsetHeight / 16)
        setHeight(height);
        setScreen(0);
      }
    }

    handleResize(); // initial call to get width and height of the element
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ref]);



  const slideUp = () => {
    if (screen === 0) {
      setScreen((images.length - 1) * height);
    }
    return setScreen((prev) => prev - height);
  };

  const slideDown = () => {
    setScreen((prev) => {
      if (prev === (images.length - 1) * height) {
        setScreen(0);
      }
      return prev + height;
    });
  };

  useEffect(() => {
    const autoScroll = setInterval(() => {
      setScreen((prev) => {
        if (prev === (images.length - 1) * height) {
          setScreen(0);
        }
        return prev + height;
      });
    }, 3000)

    return () => clearInterval(autoScroll)


  }, [height])

  const enableHomeScroll = () => {
    document.body.style.overflowY = 'scroll'
  }



  return (
    <section className="bg-hero-pattern  bg-cover bg-no-repeat bg-center pt-24">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center md:space-x-8">
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageSlide}
            transition={pageTransition}
            className="bg-devtraco-blue bg-opacity-50 rounded-3xl py-12 p-5 mb-5 md:mb-0 md:px-14 flex-1"
          >
            <span className="bg-blue-50 text-[0.75rem] px-4 rounded-sm mb-4">_Welcome to Devtraco Group</span>
            <h1 className="text-[1.5rem] sm:text-[2.5rem] max-w-2xl leading-[120%] text-white">
              Your gateway to lucrative real estate investments.
            </h1>
            <p className="text-white text-sm max-w-xl my-2 leading-[167%]">
              At Devtraco Group, we are passionate about creating exceptional
              real estate developments that transcend expectations. With a rich
              history and a commitment to excellence.
            </p>
            <Button route={headerRoutes.About} text="About Devtraco" isIcon={true} />
          </motion.div>
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageSlide}
            transition={pageTransition}
            className="flex flex-row space-x-6 bg-devtraco-blue bg-opacity-50 rounded-3xl box-border place-self-start py-5 pl-5 pr-5 sm:pr-8"
          >
            <div
              ref={ref}
              className="overflow-hidden w-full h-[18rem]  sm:h-[21rem] rounded-2xl"
            >
              <div
                style={{ transform: `translateY(-${screen}rem)` }}
                className={`transition-all ease-in-out duration-500 delay-[200ms] slider md:min-w-max h-full  flex flex-col items-center`}
              >
                {images.map(({ img }, index) => (
                  <img
                    key={index}
                    src={img}
                    alt=""
                    className="min-h-full w-full object-cover"
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-between align-center relative box-border">
              <h1 className="text-[2rem] sm:text-[2.5rem] text-white absolute transform rotate-90 -translate-x-28 translate-y-24 -mt-8 sm:-mt-5 ml-10 sm:ml-7 ">
                Properties
              </h1>
              <div className="flex flex-col mt-auto space-y-3 md:space-y-2">
                <button onClick={slideUp}>
                  <svg
                    className="w-8 h-8"
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
                    className="w-8 h-8"
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
        {/*Details Boxes */}
        <div className="flex flex-row items-stretch justify-between gap-4 overflow-auto no-scrollbar mt-5">
          <div className="group min-w-[18rem] w-[19.5rem] bg-hero-box-1 hover:bg-hero-box1-hover overflow-hidden transition-all ease-in-out duration-700 delay-200 bg-cover bg-center group relative h-[13rem]  rounded-xl p-6 flex flex-col">
            <h4 className="text-devtraco-white text-[1.5rem] mt-auto font-bold">Investors Benefits</h4>
            <p className="mt-2 text-white opacity-0 group-hover:opacity-100 text-[0.75rem] hidden flex-col group-hover:flex">In a world of increasing  economic unpredictability, we invite you to secure your future and that of your children on a time-tested foundation.</p>
            <span className="absolute top-4 right-4">
              <svg
                className="w-8 h-8 md:w-10 md:h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 73 73"
                fill="none"
              >
                <path
                  d="M24.8579 48.2036L48.8579 24.2036M48.8579 24.2036V47.2436M48.8579 24.2036H25.8179"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  cx="36.8579"
                  cy="36.2036"
                  r="35"
                  stroke="#F9FAFB"
                  stroke-width="2"
                />
              </svg>
            </span>
          </div>
          <div className="group  min-w-[18rem] w-[19.5rem] bg-[#222F70] bg-opacity-50 hover:bg-opacity-100 overflow-hidden transition-all ease-in-out duration-300 bg-cover bg-center group relative h-[13rem]  rounded-xl p-6 flex flex-col">
            <h4 className="text-devtraco-white text-[1.5rem] mt-auto font-bold">Our Branches</h4>
            <p className="mt-2 text-white opacity-0 group-hover:opacity-100 text-[0.75rem] hidden flex-col group-hover:flex transition-all ease-in-out duration-300">We are a diverse organization that houses multiple entities, each specializing in a wide range of needs in the construction, property management, hospitality, NGO, and real estate sectors.</p>
            <span className="absolute top-4 right-4">
              <svg
                className="w-8 h-8 md:w-10 md:h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 73 73"
                fill="none"
              >
                <path
                  d="M24.8579 48.2036L48.8579 24.2036M48.8579 24.2036V47.2436M48.8579 24.2036H25.8179"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  cx="36.8579"
                  cy="36.2036"
                  r="35"
                  stroke="#F9FAFB"
                  stroke-width="2"
                />
              </svg>
            </span>
          </div>
          <div className="group min-w-[18rem] w-[19.5rem] bg-[#0E1538] bg-opacity-50 hover:bg-opacity-100 overflow-hidden transition-all ease-in-out duration-600 bg-cover bg-center group relative h-[13rem]  rounded-xl p-6 flex flex-col">
            <h4 className="text-devtraco-white text-[1.5rem] mt-auto font-bold">Experienced Team</h4>
            <p className="mt-2 text-white opacity-0 group-hover:opacity-100 text-[0.75rem] hidden flex-col group-hover:flex">Our team's collective experience, dedication, and innovative thinking enable us to deliver outstanding results, exceed expectations, and ensure customer satisfaction.</p>
            <span className="absolute top-4 right-4">
              <svg
                className="w-8 h-8 md:w-10 md:h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 73 73"
                fill="none"
              >
                <path
                  d="M24.8579 48.2036L48.8579 24.2036M48.8579 24.2036V47.2436M48.8579 24.2036H25.8179"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  cx="36.8579"
                  cy="36.2036"
                  r="35"
                  stroke="#F9FAFB"
                  stroke-width="2"
                />
              </svg>
            </span>
          </div>
          <div className="group  min-w-[18rem]  w-[19.5rem] bg-hero-box-2 bg-opacity-50 hover:bg-hero-box2-hover overflow-hidden transition-all ease-in-out duration-700 delay-200 bg-cover bg-center group relative h-[13rem]  rounded-xl p-6 flex flex-col">
            <h4 className="text-devtraco-white text-[1.5rem] mt-auto font-bold">Contact Us</h4>
            <ul className="mt-2 space-y-2 text-white opacity-0 group-hover:opacity-100 text-[0.75rem] hidden flex-col group-hover:flex">
              <li className="text-devtraco-white">T: +233 (0) 302 798 692 </li>
              <li className="text-devtraco-white">C: +233 (0) 270 000 004</li>
              <li className="text-devtraco-white">Office: No. 7 Noi Fetreke Street, Airport Residential Area Accra-Ghana</li>
            </ul>
            <span className="absolute top-4 right-4">
              <svg
                className="w-8 h-8 md:w-10 md:h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 73 73"
                fill="none"
              >
                <path
                  d="M24.8579 48.2036L48.8579 24.2036M48.8579 24.2036V47.2436M48.8579 24.2036H25.8179"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  cx="36.8579"
                  cy="36.2036"
                  r="35"
                  stroke="#F9FAFB"
                  stroke-width="2"
                />
              </svg>
            </span>
          </div>

        </div>
        <div className="flex flex-row items-center justify-center">
          <a href="#about">
            <svg onClick={enableHomeScroll} className="animate-bounce" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 74 74" fill="none">
              <circle cx="37.1165" cy="36.5758" r="25.3242" transform="rotate(135 37.1165 36.5758)" stroke="#F9FAFB" stroke-width="1.07763" />
              <path d="M36.7429 23.7401V49.4116M36.7429 49.4116L24.4206 37.0892M36.7429 49.4116L49.0652 37.0892" stroke="white" stroke-width="1.95951" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
