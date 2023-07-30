import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { headerRoutes } from "../routes/routes";
import useStateValue from "../hooks/useStateValue";

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const { dispatch } = useStateValue();


  const showTransition = () => {
    if (window.scrollY > 10) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", showTransition);
    return () => window.removeEventListener("scroll", showTransition);
  }, []);

  return (
    <header
      className={`fixed w-full z-30 ${isShow && "bg-devtraco-blue backdrop-blur-lg bg-opacity-50"
        } transition-all ease-in-out duration-500 delay-[200ms] py-5 sm:py-1`}
    >
      <div className="container mx-auto">
        <nav className="flex flex-row items-center justify-between space-x-4">
          {/* <ul className="hidden md:flex flex-row items-center space-x-6 lg:space-x-14">
            <Link to={headerRoutes.About}>
              <li className="uppercase text-white cursor-pointer hover:text-devtraco-primary-blue transition-all">About</li>
            </Link>
            <Link to={headerRoutes.Team}>
              <li className="uppercase text-white cursor-pointer hover:text-devtraco-primary-blue transition-all">Team</li>
            </Link>
            <Link to={headerRoutes.Branches}>
              <li className="uppercase text-white cursor-pointer hover:text-devtraco-primary-blue transition-all">Branches</li>
            </Link>
          </ul> */}
          <div className="logo flex-none">
            <Link to={headerRoutes.Home}>
              <img
                src="../devtraco-logo.svg"
                alt="brand-logo"
                className="sm:w-24 sm:h-24 cursor-pointer"
              />
            </Link>
          </div>
          {/* <ul className="hidden md:flex flex-row items-center space-x-6 lg:space-x-14">
            <Link to={headerRoutes.Partners}>
              <li className="uppercase text-white cursor-pointer hover:text-devtraco-primary-blue transition-all">
                Investor Benefits
              </li>
            </Link>
            <Link to={headerRoutes.Services}>
              <li className="uppercase text-white cursor-pointer hover:text-devtraco-primary-blue transition-all">
                Properties
              </li>
            </Link>
            <Link to={headerRoutes.Contact}>
              <li className="uppercase text-white cursor-pointer hover:text-devtraco-primary-blue transition-all">Contact</li>
            </Link>
          </ul> */}
          <button
            onClick={() => dispatch({ type: "IS_MOBILE_OPEN" })}
            className="hamburger cursor-pointer "
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 49 49" fill="none">
              <g clip-path="url(#clip0_359_8672)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.202148 11.7308C0.202148 11.1341 0.439201 10.5618 0.861158 10.1398C1.28312 9.71789 1.85541 9.48083 2.45215 9.48083H45.9521C46.5489 9.48083 47.1212 9.71789 47.5431 10.1398C47.9651 10.5618 48.2021 11.1341 48.2021 11.7308C48.2021 12.3276 47.9651 12.8999 47.5431 13.3218C47.1212 13.7438 46.5489 13.9808 45.9521 13.9808H2.45215C1.85541 13.9808 1.28312 13.7438 0.861158 13.3218C0.439201 12.8999 0.202148 12.3276 0.202148 11.7308ZM0.202148 24.4808C0.202148 23.8841 0.439201 23.3118 0.861158 22.8898C1.28312 22.4679 1.85541 22.2308 2.45215 22.2308H45.9521C46.5489 22.2308 47.1212 22.4679 47.5431 22.8898C47.9651 23.3118 48.2021 23.8841 48.2021 24.4808C48.2021 25.0776 47.9651 25.6499 47.5431 26.0718C47.1212 26.4938 46.5489 26.7308 45.9521 26.7308H2.45215C1.85541 26.7308 1.28312 26.4938 0.861158 26.0718C0.439201 25.6499 0.202148 25.0776 0.202148 24.4808ZM2.45215 34.9808C1.85541 34.9808 1.28312 35.2179 0.861158 35.6398C0.439201 36.0618 0.202148 36.6341 0.202148 37.2308C0.202148 37.8276 0.439201 38.3999 0.861158 38.8218C1.28312 39.2438 1.85541 39.4808 2.45215 39.4808H45.9521C46.5489 39.4808 47.1212 39.2438 47.5431 38.8218C47.9651 38.3999 48.2021 37.8276 48.2021 37.2308C48.2021 36.6341 47.9651 36.0618 47.5431 35.6398C47.1212 35.2179 46.5489 34.9808 45.9521 34.9808H2.45215Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_359_8672">
                  <rect width="48" height="48" fill="white" transform="translate(0.202148 0.480835)" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
