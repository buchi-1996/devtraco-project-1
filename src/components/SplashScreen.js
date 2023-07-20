import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { pageSlide, pageTransition, pageZoom } from '../lib/framer-motion';


const SplashScreen = () => {
  return (
    <motion.div
    key="splash"
    initial="initial"
    animate="in"
    exit="out"
    variants={pageZoom}
    transition={pageTransition}

    className={`absolute inset-0 bg-devtraco-blue z-50 flex flex-col items-center justify-center w-full h-full`}>
        <img src="../57952a3da273fca6b641e5063523b4f0.gif" alt="" className='object-contain'/>
    </motion.div>
  )
}

export default SplashScreen;