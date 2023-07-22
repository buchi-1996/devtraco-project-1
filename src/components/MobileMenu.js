import React, { useContext } from 'react'
// import { Link } from 'react-router-dom';
// import { headerRoutes } from '../routes/routes';
import AppState from '../context/AppState';

const MobileMenu = () => {
  const {state, dispatch} = useContext(AppState);

  

  return (
    <div  style={{transform: `${!state.isMobileOpen ? 'translateX(100%)' : 'translateX(0%)'}`}} className={`transition ease-in-out duration-300 fixed z-50 inset-0 bg-blue-50 backdrop-blur-md bg-opacity-50`}>
        <div style={{transform: `${!state.isMobileOpen ? 'translateX(100%)' : 'translateX(0%)'}`}} className="transition ease-in-out duration-300 delay-200 h-full w-[80%] md:w-2/5 bg-devtraco-blue bg-opacity-80 absolute right-0 py-10 px-8">
          <nav>
            <div className="flex flex-row items-center justify-between">
              <span>
                <svg
                className='w-12 h-12'
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 62 50"
                  fill="none"
                >
                  <path
                    d="M23.9595 30.8507C24.813 35.45 26.9413 39.717 30.1016 43.1658C27.4534 46.6033 23.6074 48.9169 19.3298 49.6458H0.539795V38.0396H15.1429C15.1429 38.0396 19.7265 38.0396 23.9492 30.8507"
                    fill="white"
                  />
                  <path
                    d="M61.5577 1.04834V13.2713H45.9719C45.9719 13.2713 41.8285 13.4069 38.2507 20.1378C37.5564 16.1552 35.7865 12.4382 33.1322 9.38893C32.8763 9.08182 32.5973 8.77982 32.3235 8.48807C34.01 5.85205 37.7952 1.5218 44.6386 1.0509L61.5577 1.04834Z"
                    fill="white"
                  />
                  <path
                    d="M12.7453 13.2559V25.3458H0.504395V0.869141C5.87881 1.12507 11.2686 1.12507 16.5765 1.74185C22.8006 2.46356 27.9088 5.63446 31.9729 10.3793C35.5558 14.5483 37.2091 19.4518 37.076 24.9337C36.9506 29.9499 38.8675 33.8629 43.3513 36.2149C44.979 37.0697 46.5632 37.3947 49.0763 37.4945V25.5838H61.5578C61.5889 26.1208 61.5889 26.6591 61.5578 27.1961C61.5731 34.1061 61.5347 41.016 61.5936 47.926C61.5936 48.6119 61.5936 49.8147 61.5936 49.8147C61.5936 49.8147 60.5187 49.8377 59.7893 49.8147C56.2576 49.8301 51.0316 49.7968 46.6834 49.436C34.8316 48.4481 26.1583 39.6852 25.0808 27.8973C24.7916 24.7469 24.6356 21.5606 22.862 18.7532C20.5843 15.1497 17.3673 13.3122 12.7478 13.2482"
                    fill="white"
                  />
                </svg>
              </span>
              <button onClick={() => dispatch({type: 'IS_MOBILE_OPEN'})} className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 33 33"
                  fill="none"
                >
                  <path
                    d="M16.5938 2.34705C8.79375 2.34705 2.59375 8.54705 2.59375 16.347C2.59375 24.147 8.79375 30.347 16.5938 30.347C24.3937 30.347 30.5938 24.147 30.5938 16.347C30.5938 8.54705 24.3937 2.34705 16.5938 2.34705ZM16.5938 28.347C9.99375 28.347 4.59375 22.947 4.59375 16.347C4.59375 9.74705 9.99375 4.34705 16.5938 4.34705C23.1938 4.34705 28.5938 9.74705 28.5938 16.347C28.5938 22.947 23.1938 28.347 16.5938 28.347Z"
                    fill="white"
                  />
                  <path
                    d="M21.9937 23.347L16.5938 17.947L11.1938 23.347L9.59375 21.747L14.9937 16.347L9.59375 10.947L11.1938 9.34705L16.5938 14.747L21.9937 9.34705L23.5938 10.947L18.1938 16.347L23.5938 21.747L21.9937 23.347Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
             {/* <ul>
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
            </ul> */}
          </nav>
        </div>
      </div>
  )
}

export default MobileMenu