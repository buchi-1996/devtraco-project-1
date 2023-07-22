import React from "react";
import { motion } from "framer-motion";
import { pageSlide, pageTransition } from "../lib/framer-motion";
import { headerRoutes } from "../routes/routes";
import { Link } from "react-router-dom";

const GallerryCard = ({ id, image, title, units, largeThumb }, index) => {
    return (
        <div className={`${largeThumb && "col-span-2"}`}>
            <Link to={`${headerRoutes.Property}/${id}`}>
                <motion.div
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageSlide}
                    transition={pageTransition}
                    key={index}
                    className={`text-white group cursor-pointer ${largeThumb && "col-span-2"
                        } relative`}
                >
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-auto object-contain"
                    />
                    <div className="absolute group-hover:flex hidden inset-0 bg-black bg-opacity-50  flex-col transition ease-in duration-300 justify-end items-left p-5">
                        <h4 className="text-sm xl:text-[2rem]">{title}</h4>
                        <p className="uppercase">Cantoments</p>

                        <div className="mt-5">
                            <p className="text-xs xl:text-sm">No of Units</p>
                            <p className="text-xs xl:text-sm font-medium">{units}</p>
                        </div>
                        <span className="absolute top-4 right-4">
                            <svg
                                className="w-10 h-10 xl:w-14 xl:h-14"
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
                </motion.div>
            </Link>
        </div>
    );
};

export default GallerryCard;
