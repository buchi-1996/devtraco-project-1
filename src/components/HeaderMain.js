import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { headerRoutes } from "../routes/routes";

const HeaderMain = () => {
  const [isShow, setIsShow] = useState(false);

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
      className={`py-1 sticky top-0 w-full z-30 ${
        isShow && "backdrop-blur-lg bg-opacity-50"
      } bg-devtraco-blue transition-all ease-in-out duration-500 delay-[200ms]`}
    >
      <div className="container mx-auto">
        <nav className="flex flex-row items-center justify-between">
          <ul className="flex flex-row items-center space-x-14">
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
           <Link to={headerRoutes.Home}> <img
              src="../devtraco-logo.svg"
              alt="brand-logo"
              className="w-24 h-24 cursor-pointer"
            /></Link>
          </div>
          <ul className="flex flex-row items-center space-x-14">
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
          </ul>
          <div className="hamburger hidden">
            <img src="../pajamas_hamburger.svg" alt="" className="w-8 h-8" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderMain;
