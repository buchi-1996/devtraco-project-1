import React, { useEffect, useLayoutEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import Home from "./pages/Home";
import Header from "./components/Header";
import SplashScreen from "./components/SplashScreen";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Team from "./pages/Team";
import Branches from "./pages/Branches";
import Partners from "./pages/Partners";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import HeaderMain from "./components/HeaderMain";
import { headerRoutes } from "./routes/routes";
import MobileMenu from "./components/MobileMenu";
import Property from "./pages/Property";
import Properties from "./pages/Properties";
import InvestorBenefits from "./pages/InvestorBenefits";

function App() {
  const [isWelcome, setIsWelcome] = useState(true);
  const [currentWidth, setCurrentWidth] = useState(0)
  const pathname = useLocation().pathname;
  const isHome = pathname === "/";

  useEffect(() => {
    const splash = setTimeout(() => {
      setIsWelcome(false);
    }, 7500);

    return () => clearTimeout(splash);
  }, []);

  useEffect(() => {

    if (pathname === '/') {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'

    }

  }, [pathname])


  useLayoutEffect(() => {
    const enableScroll = () => {
      const width = Math.floor(window.innerWidth);
      setCurrentWidth(width)
      if (currentWidth < 1200 && pathname === '/') {
        document.body.style.overflowY = 'scroll'
      }

      // if (currentWidth > 1200 && pathname === '/') {
      //   document.body.style.overflowY = 'hidden'
      // }
    }

    enableScroll();
    window.addEventListener('resize', enableScroll);
    return () => window.removeEventListener('resize', enableScroll)
  }, [currentWidth, pathname])


  if (isWelcome && isHome) {
    return <SplashScreen />;
  }

  return (
    <main className='app'>
      <AnimatePresence mode="wait">
        <LayoutGroup>
          {isHome ? <Header /> : <HeaderMain />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={headerRoutes.About} element={<About />} />
            <Route path={headerRoutes.Team} element={<Team />} />
            <Route path={headerRoutes.Properties} element={<Properties />} />
            <Route path={`${headerRoutes.Property}/:id`} element={<Property />} />
            <Route path={headerRoutes.Branches} element={<Branches />} />
            <Route path={headerRoutes.Partners} element={<Partners />} />
            <Route path={headerRoutes.InvestorBenefits} element={<InvestorBenefits />} />
            <Route path={headerRoutes.Services} element={<Services />} />
            <Route path={headerRoutes.Contact} element={<Contact />} />
            <Route path={headerRoutes.NotFound} element={<NotFound />} />
          </Routes>
          <Footer />
        </LayoutGroup>
      </AnimatePresence>
      <MobileMenu />
    </main>
  );
}

export default App;
