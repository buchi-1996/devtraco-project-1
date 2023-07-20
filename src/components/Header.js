import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { headerRoutes } from "../routes/routes";
import AppState from "../context/AppState";

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const { state, dispatch } = useContext(AppState);
  console.log(state);

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
      className={`py-1 fixed w-full z-30 ${
        isShow && "bg-devtraco-blue backdrop-blur-lg bg-opacity-50"
      } transition-all ease-in-out duration-500 delay-[200ms]`}
    >
      <div className="container mx-auto">
        <nav className="flex flex-row items-center justify-between space-x-4">
          <ul className="hidden md:flex flex-row items-center space-x-6 lg:space-x-14">
            <Link to={headerRoutes.About}>
              <li className="uppercase text-white cursor-pointer">About</li>
            </Link>
            <Link to={headerRoutes.Team}>
              <li className="uppercase text-white cursor-pointer">Team</li>
            </Link>
            <Link to={headerRoutes.Branches}>
              <li className="uppercase text-white cursor-pointer">Branches</li>
            </Link>
          </ul>
          <div className="logo flex-none">
            <Link to={headerRoutes.Home}>
              {" "}
              <img
                src="../devtraco-logo.svg"
                alt="brand-logo"
                className="w-24 h-24 cursor-pointer"
              />
            </Link>
          </div>
          <ul className="hidden md:flex flex-row items-center space-x-6 lg:space-x-14">
            <Link to={headerRoutes.Partners}>
              <li className="uppercase text-white cursor-pointer">
                Investor Benefits
              </li>
            </Link>
            <Link to={headerRoutes.Services}>
              <li className="uppercase text-white cursor-pointer">
                Properties
              </li>
            </Link>
            <Link to={headerRoutes.Contact}>
              <li className="uppercase text-white cursor-pointer">Contact</li>
            </Link>
          </ul>
          <button
            onClick={() => dispatch({ type: "IS_MOBILE_OPEN" })}
            className="hamburger block md:hidden cursor-pointer "
          >
            <img src="../pajamas_hamburger.svg" alt="" className="w-8 h-8" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;