import React from "react";
import Hero from "../components/Hero";
import Button from "../components/Button";

const Home = () => {
  return (
    <main>
      <Hero />
      <section id="about" className="py-20 bg-devtraco-blue">
        <div className="container mx-auto">
          <div className="flex flex-row flex-wrap items-center justify-center space-x-10">
            <div>
              <img
                src="../2560px-Ecobank_Logo 1.png"
                alt=""
                className="object-contain"
              />
            </div>
            <div>
              <img src="../mu-del-logo.png" alt="" className="object-contain" />
            </div>
            <div>
              <img
                src="../gateway-logo.png"
                alt=""
                className="object-contain"
              />
            </div>
            <div>
              <img
                src="../933-9335264_gcb-bank-gcb-bank-ltd copy.png"
                alt=""
                className="object-contain"
              />
            </div>
            <div>
              <img
                src="../Xyx5kQzA_400x400 copy.png"
                alt=""
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-20 justify-center my-20">
            <div className="">
              <img
                src="../Rectangle 3850.jpg"
                alt=""
                className="w-full object-contain"
              />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <img
                  src="../Rectangle 3851.jpg"
                  alt=""
                  className="w-full object-contain"
                />
                <img
                  src="../Rectangle 3852.png"
                  alt=""
                  className="w-full object-contain"
                />
              </div>
            </div>
            <div className="">
              <h1 className="text-[3rem] font-bold md:max-w-[33.5rem] text-white">
                <span className="text-primary-purple">Why Invest in Us:</span>{" "}
                Your Path to Financial Success
              </h1>
              <p className="text-devtraco-white my-4 md:max-w-md">
                Invest with confidence and embark on a path to financial success
                with Devtraco Group. Join our community of successful investors
                who have realized impressive returns and secured their financial
                future.
              </p>
              <div className="grid grid-cols-2 items-start max-w-sm gap-6">
                <div>
                  <h4 className="font-bold text-2xl text-primary-purple">
                    30+
                  </h4>
                  <p className="text-devtraco-white">Years In Business</p>
                </div>
                <div>
                  <h4 className="font-bold text-2xl text-primary-purple">
                    10+
                  </h4>
                  <p className="text-devtraco-white">Key Industry Awards</p>
                </div>
              </div>
              <div className="grid grid-cols-2 items-start max-w-sm mt-10 gap-6">
                <div>
                  <h4 className="font-bold text-2xl text-primary-purple">
                    2700+
                  </h4>
                  <p className="text-devtraco-white">Satisfied Customers</p>
                </div>
                <div>
                  <h4 className="font-bold text-2xl text-primary-purple">
                    705+
                  </h4>
                  <p className="text-devtraco-white">Employees</p>
                </div>
              </div>
              <div className="mt-5 flex flex-row items-center space-x-4">
                <Button text="Find out More" isIcon={true} />
                <Button text="Contact Us" isIcon={false} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-devtraco-blue py-10">
        <div className="container mx-auto">
          <div className="flex flex-row items-start justify-between space-x-4">
            <div className="group/card h-[39rem] w-[27rem] flex flex-col items-left justify-end px-8 py-10 bg-extra-1 hover:bg-extra-hover-1 bg-cover bg-center">
              <div>
                <h4 className="text-white font-bold text-3xl">
                  Strategic Partnerships
                </h4>
                <div className="hidden group-hover/card:block">
                  <Button text="Find out More" isIcon={true} />
                </div>
              </div>
            </div>
            <div className="group/card h-[39rem] w-[27rem] flex flex-col items-left justify-end px-8 py-10 bg-extra-2 hover:bg-extra-hover-2 bg-cover bg-center">
              <div>
                <h4 className="text-white font-bold text-3xl">
                  Investors Benefits
                </h4>
                <div className="hidden group-hover/card:block">
                  <Button text="Find out More" isIcon={true} />
                </div>
              </div>
            </div>
            <div className="group/card h-[39rem] w-[27rem] flex flex-col items-left justify-end bg-extra-3 hover:bg-extra-hover-3 px-8 py-10 bg-card-gradient bg-cover bg-center">
              <div>
                <h4 className="text-white font-bold text-3xl">
                  Experienced Team
                </h4>
                <div className="hidden group-hover/card:block">
                  <Button text="Find out More" isIcon={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-devtraco-blue py-28">
        <div className="container mx-auto">
          <div className="flex flex-row items-end justify-between space-x-10">
            <div>
              <span className="text-primary-purple">_Our Services</span>
              <h1 className="text-[3rem] text-white font-bold max-w-[26rem]">
                Building Dreams, Creating Value
              </h1>
            </div>
            <p className="max-w-[33rem] text-white">
              At Devtraco Group, we provide a comprehensive range of services
              that cover every aspect of the property development process. With
              our expertise and attention to detail, we bring your dreams to
              life and deliver exceptional value to our clients, partners, and
              investors.
            </p>
            <Button text="Find out More" isIcon={true} />
          </div>
          <div className="my-10">
            <div className="grid grid-cols-3 gap-6 mb-6">
              {/* service card */}
              <div className="group bg-no-repeat bg-service-card-1 hover:bg-service-card-hover bg-cover py-10 px-10 col-span-2 transition-all ease-in-out duration-500 delay-[500ms]">
                <div className="flex flex-row items-center justify-between">
                  <span>
                    <svg
                      className="text-white group-hover:text-devtraco-blue"
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                    >
                      <path
                        d="M32.2266 63.9982C22.54 63.9982 12.8528 63.9982 3.16493 63.9982C1.62446 63.9982 0.63783 63.0189 0.691013 61.5701C0.703143 61.0006 0.934509 60.4578 1.33695 60.0546C1.73939 59.6515 2.28183 59.4192 2.8513 59.4061C3.46015 59.3823 4.07083 59.3896 4.68518 59.4061C5.03913 59.4061 5.20968 59.2649 5.19501 58.9055C5.18584 58.6946 5.19501 58.4818 5.19501 58.2709C5.19501 44.996 5.19015 31.7205 5.18037 18.4444C5.18037 16.2052 6.14682 14.7234 8.10174 13.7478C16.8531 9.38494 25.6099 5.03132 34.3264 0.615311C37.5687 -1.03519 40.7083 0.861032 41.2309 3.62104C41.2986 4.03742 41.3268 4.45926 41.3153 4.88094C41.3153 9.99382 41.3318 15.1067 41.3043 20.2196C41.3043 20.9219 41.4749 21.1365 42.2029 21.1365C46.3072 21.1035 50.4114 21.1182 54.5175 21.1218C57.4682 21.1218 59.3333 22.9998 59.3351 25.9688C59.3351 36.7814 59.3351 47.594 59.3351 58.4066C59.3351 59.4043 59.3351 59.4043 60.3328 59.4043C60.7784 59.4043 61.224 59.3933 61.6697 59.4043C62.2615 59.4305 62.8196 59.6874 63.2244 60.12C63.6292 60.5525 63.8485 61.1264 63.8355 61.7187C63.8457 62.2998 63.6294 62.862 63.2323 63.2865C62.8353 63.7109 62.2887 63.9642 61.7082 63.9927C61.4276 64.0092 61.1452 63.9927 60.8646 63.9927L32.2266 63.9982ZM36.7178 32.0885V5.62914C36.7178 4.66084 36.7177 4.65901 35.8778 5.07897C27.426 9.30669 18.9712 13.5295 10.5133 17.7475C9.97596 18.0152 9.77973 18.327 9.77973 18.9303C9.79685 32.1148 9.80114 45.298 9.79258 58.48C9.79258 59.3969 9.7926 59.3969 10.7297 59.3969H35.711C36.7178 59.3969 36.7178 59.3969 36.7178 58.4103V32.0885ZM54.7339 42.5545C54.7339 37.2069 54.7339 31.8574 54.7467 26.5098C54.7467 25.9028 54.5872 25.6974 53.9563 25.701C50.0147 25.7267 46.0737 25.7267 42.1332 25.701C41.4712 25.701 41.308 25.9101 41.3098 26.5447C41.3257 37.2179 41.3257 47.8918 41.3098 58.5662C41.3098 59.2007 41.4712 59.4153 42.1332 59.4098C46.0517 59.3804 49.9694 59.3804 53.8866 59.4098C54.578 59.4098 54.7504 59.1952 54.7486 58.5295C54.7229 53.2057 54.7339 47.8801 54.7339 42.5545Z"
                        fill="currentColor"
                      />
                      <path
                        d="M23.2202 27.9659C21.0379 27.9659 18.8574 27.9659 16.6769 27.9659C15.197 27.9659 14.2049 27.038 14.2012 25.6791C14.1975 24.3202 15.1585 23.3702 16.6439 23.3683C21.0526 23.3683 25.4613 23.3683 29.8699 23.3683C31.3462 23.3683 32.3163 24.3018 32.3108 25.6846C32.3053 27.0673 31.3132 27.9623 29.8333 27.9659C27.6289 27.9714 25.4246 27.9659 23.2202 27.9659Z"
                        fill="currentColor"
                      />
                      <path
                        d="M23.2147 36.974C21.0324 36.974 18.8519 36.974 16.6714 36.974C15.1933 36.974 14.203 36.0442 14.2012 34.6816C14.1993 33.3191 15.1621 32.3783 16.6476 32.3764C21.0575 32.3764 25.4668 32.3764 29.8754 32.3764C31.3425 32.3764 32.3182 33.3135 32.3108 34.6963C32.3017 36.0314 31.3205 36.9685 29.8974 36.974C27.6693 36.9813 25.4429 36.974 23.2147 36.974Z"
                        fill="currentColor"
                      />
                      <path
                        d="M23.2221 45.982C21.0397 45.982 18.8593 45.982 16.6788 45.982C15.1988 45.982 14.2067 45.0651 14.2012 43.697C14.2012 42.3106 15.1585 41.3863 16.6421 41.3845C21.0508 41.3845 25.4594 41.3845 29.8681 41.3845C31.3462 41.3845 32.3163 42.3161 32.3108 43.6989C32.3053 45.0816 31.3132 45.9784 29.8351 45.982C27.6307 45.9875 25.4264 45.982 23.2221 45.982Z"
                        fill="currentColor"
                      />
                      <path
                        d="M23.2535 54.9883C20.9795 54.9883 18.7036 55.0011 16.4296 54.9883C15.8854 54.982 15.3618 54.7797 14.9545 54.4186C14.5473 54.0576 14.2839 53.5619 14.2125 53.0224C14.0768 51.8193 14.7333 50.7795 15.8446 50.4787C16.1185 50.4144 16.3997 50.3867 16.6809 50.3962C21.0651 50.3962 25.4499 50.3962 29.8354 50.3962C31.33 50.3962 32.3038 51.3132 32.3111 52.6794C32.3185 54.0456 31.3245 54.9937 29.7969 54.9956C27.6164 54.9956 25.434 54.9956 23.2535 54.9956V54.9883Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="bg-white group-hover:bg-devtraco-blue w-12 h-12 flex items-center justify-center rounded-full">
                    <svg
                      className="text-devtraco-blue group-hover:text-devtraco-primary-blue"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="iconoir:arrow-tr">
                        <path
                          id="Vector"
                          d="M6 19.8484L19 6.84839M19 6.84839V19.3284M19 6.84839H6.52"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
                <h4 className="font-bold text-[2rem] mt-10 mb-4 text-white group-hover:text-devtraco-blue">
                  Development
                </h4>
                <p className="text-white max-w-md group-hover:text-devtraco-blue group-hover:font-[400]">
                  From concept to completion, our expert team at Devtraco Group
                  brings your vision to life. We specialize in designing and
                  developing premium residential and commercial properties that
                  surpass expectations.
                </p>
              </div>
              <div className="group bg-no-repeat bg-service-card-2 hover:bg-service-card-hover bg-cover py-10 px-10 transition-all ease-in-out duration-500 delay-[500ms]">
                <div className="flex flex-row items-center justify-between">
                  <span>
                    <svg
                      className="text-white group-hover:text-devtraco-blue"
                      xmlns="http://www.w3.org/2000/svg"
                      width="65"
                      height="64"
                      viewBox="0 0 65 64"
                      fill="none"
                    >
                      <path
                        d="M2.18796 63.9925C1.53475 63.6484 1.01667 63.1904 0.910303 62.4108C0.748877 61.2145 1.5898 60.2234 2.80488 60.2084C4.26147 60.1896 5.71807 60.1833 7.17466 60.2084C7.70399 60.2196 7.90045 60.0832 7.90045 59.5164C7.88543 46.1759 7.88543 32.8351 7.90045 19.4938C7.90045 18.9845 7.75654 18.8018 7.22972 18.8118C5.64924 18.8406 4.06627 18.8256 2.48454 18.8206C1.15058 18.8206 0.402253 18.0698 0.39975 16.7283C0.394745 14.334 0.394745 11.9406 0.39975 9.54795C0.39975 8.25528 1.16433 7.50069 2.462 7.49568C4.00244 7.49568 5.54288 7.49568 7.08206 7.49568C7.8892 7.49568 7.89044 7.49569 7.89044 6.65978C7.89044 5.11934 7.89044 3.57892 7.89044 2.03973C7.89044 0.779604 8.65503 0.00750821 9.9064 0.00500548C13.5904 -0.00166849 17.2745 -0.00166849 20.9585 0.00500548C22.1761 0.00500548 22.9507 0.779587 22.9607 1.99091C22.9707 3.59392 22.9845 5.19694 22.9519 6.79869C22.9407 7.3493 23.1159 7.50696 23.6627 7.5057C29.5116 7.48818 35.3592 7.50571 41.2081 7.48194C41.6111 7.46595 42.0128 7.5373 42.3856 7.69109C42.7584 7.84488 43.0935 8.07745 43.368 8.37289C45.6447 10.6879 47.9388 12.9821 50.2505 15.2554C50.5249 15.5093 50.7405 15.8199 50.8823 16.1658C51.0241 16.5116 51.0887 16.8842 51.0714 17.2576C51.0377 19.2348 51.0714 21.212 51.0539 23.1891C51.0453 23.3634 51.079 23.5373 51.1522 23.6957C51.2254 23.8542 51.336 23.9925 51.4744 24.0989C55.3703 27.42 59.2604 30.7474 63.1446 34.081C63.6252 34.4927 64.0744 34.9232 64.1595 35.5964C64.3222 36.8703 63.4525 37.8026 62.0797 37.8039C53.9834 37.8039 45.887 37.8039 37.7907 37.8039C37.2288 37.8039 36.6644 37.8039 36.1051 37.8039C35.2016 37.7926 34.5496 37.3671 34.2405 36.6C34.0841 36.2314 34.0505 35.8222 34.1447 35.433C34.2389 35.0438 34.4559 34.6952 34.7636 34.4389C36.07 33.2776 37.404 32.1477 38.7304 31.0102C41.4317 28.6951 44.1363 26.383 46.8443 24.0738C46.9742 23.9724 47.0774 23.841 47.145 23.6907C47.2125 23.5405 47.2425 23.3761 47.2322 23.2116C47.216 22.0253 47.2322 20.834 47.226 19.6528C47.226 18.8243 47.226 18.8218 46.4113 18.8218H25.8113C25.0404 18.8218 24.2709 18.8368 23.5013 18.8218C23.0908 18.8106 22.9256 18.9733 22.9619 19.3737C22.9757 19.5176 22.9619 19.664 22.9619 19.8104C22.9619 32.9431 22.9619 46.0758 22.9619 59.2085C22.9619 60.2096 22.9619 60.2096 23.9868 60.2096H27.6083C28.9022 60.2096 29.6317 60.6576 29.8958 61.6112C30.1598 62.5647 29.7519 63.3418 28.6619 64L2.18796 63.9925ZM44.3678 14.8988L40.9892 11.4913C40.8077 11.3086 40.5712 11.3324 40.3434 11.3324H37.2225C32.7076 11.3324 28.1927 11.3399 23.6777 11.3224C23.1459 11.3224 22.9269 11.4475 22.9569 12.0181C23.0057 12.7448 23.0057 13.4739 22.9569 14.2005C22.9094 14.8412 23.1309 15.0064 23.7616 15.0051C30.4201 14.9826 37.0774 14.9914 43.7359 14.9876C43.9286 14.9851 44.1401 15.054 44.3678 14.8988ZM41.3258 33.9196H56.9141C56.8464 33.832 56.7737 33.7485 56.6963 33.6693C54.3279 31.6363 51.9603 29.6024 49.5936 27.5677C49.2469 27.2673 48.9942 27.3261 48.6776 27.6027C47.5513 28.5888 46.4051 29.5561 45.2688 30.5321C43.9862 31.6283 42.7123 32.7296 41.3258 33.9221V33.9196ZM11.7647 34.9207C11.9211 34.7956 11.9887 34.7468 12.0462 34.6892C13.9959 32.7283 15.9367 30.7586 17.9001 28.8078C18.2167 28.4937 18.1329 28.326 17.8676 28.0569C15.9693 26.1611 14.0847 24.2515 12.1926 22.3507C12.0813 22.2393 11.9974 22.0767 11.7647 22.0692V34.9207ZM19.0702 45.8439V33.4704C17.1105 35.3474 15.0545 37.3133 12.9885 39.2742C12.6131 39.6246 12.9109 39.8111 13.1262 40.025C14.9498 41.8495 16.7743 43.6728 18.5997 45.4948C18.7273 45.6299 18.8312 45.7988 19.0702 45.8489V45.8439ZM11.7672 44.1808V56.3517C11.8408 56.3294 11.911 56.2974 11.9762 56.2565C13.8607 54.3795 15.7445 52.5024 17.6274 50.6254C17.8776 50.3826 17.8063 50.2162 17.5923 50.006C17.0104 49.4416 16.4436 48.8634 15.8704 48.2903C14.5365 46.9564 13.2013 45.6212 11.7672 44.1858V44.1808ZM15.47 3.83418C14.4088 3.83418 13.3427 3.84419 12.2852 3.83418C11.9023 3.83418 11.7084 3.93306 11.7184 4.35978C11.7396 5.23573 11.7346 6.11169 11.7184 6.98139C11.7184 7.3568 11.8435 7.5032 12.2277 7.50069C14.35 7.49068 16.4732 7.49068 18.5972 7.50069C19.0126 7.50069 19.1415 7.33677 19.1327 6.94259C19.1152 6.11043 19.1077 5.27702 19.1327 4.43985C19.1478 3.9831 18.9951 3.81417 18.5258 3.82293C17.511 3.85797 16.4949 3.83919 15.47 3.83919V3.83418ZM15.4262 11.3274C14.365 11.3274 13.2989 11.3361 12.2415 11.3274C11.8736 11.3274 11.7121 11.4525 11.7196 11.8279C11.7359 12.7039 11.7384 13.5799 11.7196 14.4558C11.7096 14.8688 11.8773 14.9977 12.274 14.9952C14.3763 14.9826 16.4786 14.9826 18.5809 14.9952C18.9776 14.9952 19.1453 14.87 19.1352 14.4558C19.1152 13.6024 19.1127 12.749 19.1352 11.8955C19.1478 11.4525 18.9726 11.3161 18.5471 11.3249C17.5085 11.3462 16.4673 11.3324 15.4262 11.3324V11.3274ZM19.129 54.845L13.7619 60.1971H17.337C19.129 60.1971 19.129 60.1971 19.129 58.4089V54.845ZM4.23144 13.217C4.23144 13.6337 4.24521 14.0504 4.23144 14.4683C4.21768 14.8312 4.34156 15.0039 4.73199 14.9977C5.62672 14.9814 6.52269 14.9852 7.41742 14.9977C7.76405 14.9977 7.90171 14.86 7.89796 14.5146C7.88711 13.6195 7.88711 12.7243 7.89796 11.8292C7.89796 11.4951 7.78784 11.3286 7.42995 11.3286C6.5152 11.3399 5.5992 11.3374 4.67694 11.3286C4.35909 11.3286 4.22268 11.4625 4.22894 11.7791C4.2377 12.2596 4.23144 12.7389 4.23144 13.217ZM19.1227 23.6484C19.1227 22.218 19.1152 20.7627 19.1227 19.3086C19.1227 18.9082 18.9313 18.8193 18.5821 18.8218C17.2507 18.8331 15.9192 18.8218 14.5878 18.8293C14.4939 18.8293 14.37 18.8005 14.3463 19.0683L19.1227 23.6484Z"
                        fill="currentColor"
                      />
                      <path
                        d="M37.2828 63.9925C36.3393 63.5295 35.9701 62.7875 35.9751 61.725C36.0052 55.7185 35.9889 49.7031 35.9902 43.6915C35.9902 42.1824 36.6984 41.4691 38.1951 41.4691H60.094C61.5957 41.4691 62.2989 42.1824 62.2989 43.6903C62.2989 49.6969 62.2852 55.7135 62.314 61.725C62.314 62.7875 61.9511 63.5295 61.0075 63.9925H37.2828ZM49.1458 45.3033C46.2539 45.3033 43.362 45.3033 40.4701 45.3033C40.0571 45.3033 39.8143 45.3596 39.8168 45.8702C39.8319 50.4677 39.8319 55.0657 39.8168 59.664C39.8168 60.067 39.9557 60.2221 40.3624 60.2121C41.1733 60.1921 41.9892 60.1746 42.7964 60.2121C43.3645 60.2422 43.4959 60.0219 43.4909 59.4901C43.4683 56.7233 43.4796 53.9565 43.4821 51.1885C43.4821 49.6756 44.1866 48.9636 45.682 48.9611C47.9703 48.9611 50.2591 48.9611 52.5483 48.9611C54.1262 48.9611 54.8082 49.6531 54.8082 51.2536C54.8082 54.0216 54.8183 56.7884 54.8007 59.5552C54.8007 60.0332 54.9259 60.2334 55.4339 60.2109C56.2235 60.1746 57.0169 60.1733 57.8115 60.2109C58.3359 60.2346 58.486 60.0432 58.4835 59.5314C58.4677 55.0164 58.4677 50.5015 58.4835 45.9866C58.4835 45.421 58.2933 45.287 57.7615 45.2908C54.8896 45.3146 52.0177 45.3033 49.1458 45.3033ZM50.9766 56.5431C50.9766 55.4807 50.9665 54.4158 50.9766 53.3584C50.9828 52.973 50.8764 52.7815 50.4497 52.7915C49.5738 52.8116 48.6978 52.8078 47.8218 52.7915C47.4464 52.7853 47.3013 52.9166 47.3025 53.3021C47.3125 55.4244 47.3125 57.5471 47.3025 59.6703C47.3025 60.087 47.4677 60.2147 47.8619 60.2059C48.7141 60.1871 49.5688 60.1871 50.4209 60.2059C50.8226 60.2147 50.9803 60.072 50.9728 59.6628C50.964 58.6242 50.9766 57.583 50.9766 56.5431Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="bg-white group-hover:bg-devtraco-blue w-12 h-12 flex items-center justify-center rounded-full">
                    <svg
                      className="text-devtraco-blue group-hover:text-devtraco-primary-blue"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="iconoir:arrow-tr">
                        <path
                          id="Vector"
                          d="M6 19.8484L19 6.84839M19 6.84839V19.3284M19 6.84839H6.52"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
                <h4 className="font-bold text-[2rem] mt-10 mb-4 text-white group-hover:text-devtraco-blue">
                  Construction
                </h4>
                <p className="text-white max-w-md group-hover:text-devtraco-blue group-hover:font-[400]">
                  From concept to completion, our expert team at Devtraco Group
                  brings your vision to life. We specialize in designing and
                  developing premium residential and commercial properties that
                  surpass expectations.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {/* service card */}
              <div className="group bg-no-repeat bg-service-card-3 hover:bg-service-card-hover bg-cover py-10 px-10 transition-all ease-in-out duration-500 delay-[500ms]">
                <div className="flex flex-row items-center justify-between">
                  <span>
                    <svg
                      className="text-white group-hover:text-devtraco-blue"
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="64"
                      viewBox="0 0 64 64"
                      fill="none"
                    >
                      <path
                        d="M32.2266 63.9982C22.54 63.9982 12.8528 63.9982 3.16493 63.9982C1.62446 63.9982 0.63783 63.0189 0.691013 61.5701C0.703143 61.0006 0.934509 60.4578 1.33695 60.0546C1.73939 59.6515 2.28183 59.4192 2.8513 59.4061C3.46015 59.3823 4.07083 59.3896 4.68518 59.4061C5.03913 59.4061 5.20968 59.2649 5.19501 58.9055C5.18584 58.6946 5.19501 58.4818 5.19501 58.2709C5.19501 44.996 5.19015 31.7205 5.18037 18.4444C5.18037 16.2052 6.14682 14.7234 8.10174 13.7478C16.8531 9.38494 25.6099 5.03132 34.3264 0.615311C37.5687 -1.03519 40.7083 0.861032 41.2309 3.62104C41.2986 4.03742 41.3268 4.45926 41.3153 4.88094C41.3153 9.99382 41.3318 15.1067 41.3043 20.2196C41.3043 20.9219 41.4749 21.1365 42.2029 21.1365C46.3072 21.1035 50.4114 21.1182 54.5175 21.1218C57.4682 21.1218 59.3333 22.9998 59.3351 25.9688C59.3351 36.7814 59.3351 47.594 59.3351 58.4066C59.3351 59.4043 59.3351 59.4043 60.3328 59.4043C60.7784 59.4043 61.224 59.3933 61.6697 59.4043C62.2615 59.4305 62.8196 59.6874 63.2244 60.12C63.6292 60.5525 63.8485 61.1264 63.8355 61.7187C63.8457 62.2998 63.6294 62.862 63.2323 63.2865C62.8353 63.7109 62.2887 63.9642 61.7082 63.9927C61.4276 64.0092 61.1452 63.9927 60.8646 63.9927L32.2266 63.9982ZM36.7178 32.0885V5.62914C36.7178 4.66084 36.7177 4.65901 35.8778 5.07897C27.426 9.30669 18.9712 13.5295 10.5133 17.7475C9.97596 18.0152 9.77973 18.327 9.77973 18.9303C9.79685 32.1148 9.80114 45.298 9.79258 58.48C9.79258 59.3969 9.7926 59.3969 10.7297 59.3969H35.711C36.7178 59.3969 36.7178 59.3969 36.7178 58.4103V32.0885ZM54.7339 42.5545C54.7339 37.2069 54.7339 31.8574 54.7467 26.5098C54.7467 25.9028 54.5872 25.6974 53.9563 25.701C50.0147 25.7267 46.0737 25.7267 42.1332 25.701C41.4712 25.701 41.308 25.9101 41.3098 26.5447C41.3257 37.2179 41.3257 47.8918 41.3098 58.5662C41.3098 59.2007 41.4712 59.4153 42.1332 59.4098C46.0517 59.3804 49.9694 59.3804 53.8866 59.4098C54.578 59.4098 54.7504 59.1952 54.7486 58.5295C54.7229 53.2057 54.7339 47.8801 54.7339 42.5545Z"
                        fill="currentColor"
                      />
                      <path
                        d="M23.2202 27.9659C21.0379 27.9659 18.8574 27.9659 16.6769 27.9659C15.197 27.9659 14.2049 27.038 14.2012 25.6791C14.1975 24.3202 15.1585 23.3702 16.6439 23.3683C21.0526 23.3683 25.4613 23.3683 29.8699 23.3683C31.3462 23.3683 32.3163 24.3018 32.3108 25.6846C32.3053 27.0673 31.3132 27.9623 29.8333 27.9659C27.6289 27.9714 25.4246 27.9659 23.2202 27.9659Z"
                        fill="currentColor"
                      />
                      <path
                        d="M23.2147 36.974C21.0324 36.974 18.8519 36.974 16.6714 36.974C15.1933 36.974 14.203 36.0442 14.2012 34.6816C14.1993 33.3191 15.1621 32.3783 16.6476 32.3764C21.0575 32.3764 25.4668 32.3764 29.8754 32.3764C31.3425 32.3764 32.3182 33.3135 32.3108 34.6963C32.3017 36.0314 31.3205 36.9685 29.8974 36.974C27.6693 36.9813 25.4429 36.974 23.2147 36.974Z"
                        fill="currentColor"
                      />
                      <path
                        d="M23.2221 45.982C21.0397 45.982 18.8593 45.982 16.6788 45.982C15.1988 45.982 14.2067 45.0651 14.2012 43.697C14.2012 42.3106 15.1585 41.3863 16.6421 41.3845C21.0508 41.3845 25.4594 41.3845 29.8681 41.3845C31.3462 41.3845 32.3163 42.3161 32.3108 43.6989C32.3053 45.0816 31.3132 45.9784 29.8351 45.982C27.6307 45.9875 25.4264 45.982 23.2221 45.982Z"
                        fill="currentColor"
                      />
                      <path
                        d="M23.2535 54.9883C20.9795 54.9883 18.7036 55.0011 16.4296 54.9883C15.8854 54.982 15.3618 54.7797 14.9545 54.4186C14.5473 54.0576 14.2839 53.5619 14.2125 53.0224C14.0768 51.8193 14.7333 50.7795 15.8446 50.4787C16.1185 50.4144 16.3997 50.3867 16.6809 50.3962C21.0651 50.3962 25.4499 50.3962 29.8354 50.3962C31.33 50.3962 32.3038 51.3132 32.3111 52.6794C32.3185 54.0456 31.3245 54.9937 29.7969 54.9956C27.6164 54.9956 25.434 54.9956 23.2535 54.9956V54.9883Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="bg-white group-hover:bg-devtraco-blue w-12 h-12 flex items-center justify-center rounded-full">
                    <svg
                      className="text-devtraco-blue group-hover:text-devtraco-primary-blue"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="iconoir:arrow-tr">
                        <path
                          id="Vector"
                          d="M6 19.8484L19 6.84839M19 6.84839V19.3284M19 6.84839H6.52"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
                <h4 className="font-bold text-[2rem] mt-10 mb-4 text-white group-hover:text-devtraco-blue">
                  Property Management
                </h4>
                <p className="text-white max-w-md group-hover:text-devtraco-blue group-hover:font-[400]">
                  From concept to completion, our expert team at Devtraco Group
                  brings your vision to life. We specialize in designing and
                  developing premium residential and commercial properties that
                  surpass expectations.
                </p>
              </div>
              <div className="group bg-no-repeat bg-service-card-4 hover:bg-service-card-hover bg-cover py-10 px-10 col-span-2 transition-all ease-in-out duration-500 delay-[500ms]">
                <div className="flex flex-row items-center justify-between">
                  <span>
                    <svg
                      className="text-white group-hover:text-devtraco-blue"
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="64"
                      viewBox="0 0 50 64"
                      fill="none"
                    >
                      <path
                        d="M5.613 63.9917C4.65365 63.7064 3.70929 63.381 2.92679 62.7236C0.899622 61.0201 0.0303689 58.8595 0.682732 56.2718C2.39957 49.4545 6.4906 44.4608 12.6138 41.0889C13.6149 40.54 14.6777 40.2997 15.8039 40.55C17.4957 40.9254 18.5869 42.2284 18.717 44.1488C18.7837 45.1099 19.2376 45.7972 19.8849 46.3996C21.2347 47.6409 22.833 48.4835 24.4898 49.2359C24.5922 49.2858 24.7046 49.3117 24.8185 49.3117C24.9324 49.3117 25.0448 49.2858 25.1472 49.2359C26.9224 48.4484 28.6509 47.5841 30.0591 46.206C30.6603 45.6573 31.0316 44.9015 31.0986 44.0904C31.3722 41.1473 33.9349 39.6457 36.6745 40.8587C39.7928 42.2435 42.3472 44.3924 44.4511 47.0653C47.3428 50.6823 49.0575 55.0981 49.3647 59.7188C49.4014 60.2376 49.4548 60.7549 49.4598 61.2738C49.4698 62.6169 48.8158 63.5128 47.5695 63.9883H46.1963C44.8616 63.4878 44.271 62.4968 44.291 61.0886C44.2949 59.7372 44.1227 58.3911 43.7788 57.0843C42.6609 52.6646 40.2316 49.1542 36.4609 46.5731C36.0788 46.3128 35.9153 46.3595 35.7552 46.7966C35.2063 48.2799 34.2152 49.4495 33.0306 50.4672C31.533 51.7292 29.8605 52.7677 28.0653 53.5505C27.6482 53.7374 27.458 53.971 27.478 54.4431C27.5114 55.2774 27.4914 56.1116 27.478 56.9458C27.478 57.9002 27.5548 58.8612 27.3112 59.8005C26.7022 62.0663 25.1923 63.4044 22.9732 64L5.613 63.9917ZM14.2706 58.9513C16.6831 58.9513 19.0957 58.9513 21.5066 58.9513C22.0806 58.9513 22.3409 58.7444 22.3308 58.1437C22.3058 56.9375 22.3025 55.7312 22.3308 54.5249C22.3442 54.0344 22.164 53.7791 21.7219 53.5772C20.0642 52.8464 18.5102 51.9 17.1002 50.7625C15.7655 49.6647 14.626 48.41 14.0286 46.7583C13.8868 46.3645 13.7317 46.3428 13.4097 46.5647C9.62228 49.1692 6.97945 52.6062 5.76649 57.076C5.4328 58.3256 5.92165 58.948 7.21803 58.9513C9.57165 58.9569 11.9225 58.9569 14.2706 58.9513Z"
                        fill="currentColor"
                      />
                      <path
                        d="M33.339 63.9917C31.7173 63.2592 31.0816 61.9895 31.6522 60.558C32.0543 59.5569 32.8201 58.9963 33.9013 58.963C35.0859 58.9279 36.2721 58.9479 37.4567 58.9546C38.8082 58.963 39.7509 59.7288 40.0395 61.0335C40.2848 62.1497 39.6791 63.2909 38.5496 63.8382C38.4378 63.8916 38.3227 63.9399 38.2159 63.9917H33.339Z"
                        fill="currentColor"
                      />
                      <path
                        d="M24.5601 17.5771C20.6871 17.5771 16.8157 17.5771 12.946 17.5771C9.94282 17.5771 7.72878 15.4081 7.72711 12.3899C7.72711 10.3727 7.56029 8.3489 7.83392 6.34176C8.30776 2.8547 11.5379 0.0200214 15.055 0.0116791C21.3839 -0.00389305 27.7112 -0.00389305 34.0369 0.0116791C37.5873 0.0116791 40.7924 2.66952 41.318 6.18494C41.6539 8.57887 41.6662 11.0071 41.3547 13.4043C41.056 15.8503 38.9071 17.5754 36.4228 17.5754C32.4685 17.5838 28.5143 17.5771 24.5601 17.5771ZM24.6002 12.4883C28.2707 12.4883 31.9246 12.4766 35.5869 12.5017C36.1725 12.5017 36.3394 12.3148 36.326 11.7509C36.2926 10.3577 36.306 8.96291 36.3126 7.56976C36.3262 7.02308 36.1492 6.4887 35.8121 6.05813C35.2382 5.32235 34.4423 5.08541 33.5497 5.08374C30.1572 5.08374 26.7647 5.08374 23.3722 5.08374C20.7927 5.08374 18.2117 5.08374 15.6322 5.08374C13.8537 5.08374 12.8776 6.05647 12.8743 7.81167C12.8743 9.10138 12.906 10.3928 12.8626 11.6808C12.8409 12.3098 13.0295 12.5 13.6685 12.495C17.3174 12.4783 20.9579 12.4883 24.6002 12.4883Z"
                        fill="currentColor"
                      />
                      <path
                        d="M24.6669 37.8087C16.2946 37.8004 9.40559 32.0492 7.88396 23.9606C7.61701 22.5374 8.45457 21.2077 9.80435 20.9057C10.1402 20.8242 10.4892 20.8124 10.8298 20.8709C11.1704 20.9294 11.4954 21.0569 11.7849 21.2457C12.0743 21.4345 12.3221 21.6806 12.5129 21.9687C12.7037 22.2568 12.8335 22.581 12.8943 22.9212C13.3949 25.4455 14.471 27.6679 16.3697 29.4164C19.6966 32.4797 23.6108 33.4741 27.9354 32.171C32.3167 30.853 35.0196 27.818 36.0557 23.3499C36.4345 21.7148 37.2553 20.8773 38.6318 20.864C39.0129 20.8526 39.3917 20.9272 39.74 21.0822C40.0883 21.2372 40.3973 21.4686 40.644 21.7594C40.8906 22.0501 41.0686 22.3926 41.1648 22.7616C41.261 23.1305 41.2729 23.5164 41.1996 23.8905C40.5968 27.2643 38.9836 30.3756 36.5736 32.8124C34.1636 35.2492 31.0704 36.8967 27.7035 37.5367C26.705 37.7431 25.6862 37.8343 24.6669 37.8087Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="bg-white group-hover:bg-devtraco-blue w-12 h-12 flex items-center justify-center rounded-full">
                    <svg
                      className="text-devtraco-blue group-hover:text-devtraco-primary-blue"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="iconoir:arrow-tr">
                        <path
                          id="Vector"
                          d="M6 19.8484L19 6.84839M19 6.84839V19.3284M19 6.84839H6.52"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
                <h4 className="font-bold text-[2rem] mt-10 mb-4 text-white group-hover:text-devtraco-blue">
                  Hospitality
                </h4>
                <p className="text-white max-w-md group-hover:text-devtraco-blue group-hover:font-[400]">
                  From concept to completion, our expert team at Devtraco Group
                  brings your vision to life. We specialize in designing and
                  developing premium residential and commercial properties that
                  surpass expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-devtraco-blue py-18">
        <div className="container mx-auto">
          <div className="flex flex-row items-end justify-between space-x-10">
            <div>
              <span className="text-primary-purple">_Our Subsidiaries</span>
              <h1 className="text-[3rem] text-white font-bold max-w-[35rem]">
                Empowering Lives, Transforming Industries
              </h1>
            </div>
            <p className="max-w-[25rem] text-white">
              At Devtraco Group, we believe in the power of synergy and
              diversity. Our subsidiaries encompass a wide range of industries,
              allowing us to make a positive impact in various sectors and
              empower lives in multiple ways.
            </p>
            <Button text="Find out More" isIcon={true} />
          </div>
          <div className="grid  grid-cols-1 md:grid-cols-3 gap-y-10 gap-4 py-20">
            <div className="w-full md:max-w-[26rem]">
              <div className="relative group/sub">
                <img
                  src="../property1.jpg"
                  alt=""
                  className="object-cover w-full"
                />
                <div className="group-hover/sub:flex hidden flex-col items-center justify-center bg-black bg-opacity-50 absolute inset-0">
                  <Button text="Learn More" isIcon={false} isOutlined={true} />
                  <span className="bg-white w-8 h-8 flex items-center justify-center rounded-full absolute right-4 top-4">
                    <svg
                      className="text-devtraco-blue"
                      width="20"
                      height="20"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="iconoir:arrow-tr">
                        <path
                          id="Vector"
                          d="M6 19.8484L19 6.84839M19 6.84839V19.3284M19 6.84839H6.52"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
              <h4 className="font-bold text-devetraco-white text-[1.5rem] text-white mt-5 mb-0.5">
                Fabrico Builders
              </h4>
              <span className="bg-white px-2 font-medium text-[0.75rem]">
                Construction
              </span>
              <p className="text-white mt-4">
                At Devtraco Group, we provide a comprehensive range of services
                that cover every aspect of the property development process.
                With our expertise and attention to detail, we bring your dreams
                to life and deliver exceptional value to our clients, partners,
                and investors.
              </p>
            </div>

            <div className="w-full md:max-w-[26rem]">
              <div className="relative group/sub">
                <img
                  src="../property1.jpg"
                  alt=""
                  className="object-cover w-full"
                />
                <div className="group-hover/sub:flex hidden flex-col items-center justify-center bg-black bg-opacity-50 absolute inset-0">
                  <Button text="Learn More" isIcon={false} isOutlined={true} />
                  <span className="bg-white w-8 h-8 flex items-center justify-center rounded-full absolute right-4 top-4">
                    <svg
                      className="text-devtraco-blue"
                      width="20"
                      height="20"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="iconoir:arrow-tr">
                        <path
                          id="Vector"
                          d="M6 19.8484L19 6.84839M19 6.84839V19.3284M19 6.84839H6.52"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
              <h4 className="font-bold text-devetraco-white text-[1.5rem] text-white mt-5 mb-0.5">
                Devtraco Limited
              </h4>
              <span className="bg-white px-2 font-medium text-[0.75rem]">
                Real Estate
              </span>
              <p className="text-white mt-4">
                Established in 1993, Devtraco Limited has carved its place in
                Ghana's real estate market as a bold, visionary developer.
                Devtraco is the premier developer in the lower to mid-customer
                market with a portfolio of over 1,800 units across 705 acres in
                11 unique developments.
              </p>
            </div>
            <div className="w-full md:max-w-[26rem]">
              <div className="relative group/sub">
                <img
                  src="../property1.jpg"
                  alt=""
                  className="object-cover w-full"
                />
                <div className="group-hover/sub:flex hidden flex-col items-center justify-center bg-black bg-opacity-50 absolute inset-0">
                  <Button text="Learn More" isIcon={false} isOutlined={true} />
                  <span className="bg-white w-8 h-8 flex items-center justify-center rounded-full absolute right-4 top-4">
                    <svg
                      className="text-devtraco-blue"
                      width="20"
                      height="20"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="iconoir:arrow-tr">
                        <path
                          id="Vector"
                          d="M6 19.8484L19 6.84839M19 6.84839V19.3284M19 6.84839H6.52"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
              <h4 className="font-bold text-devetraco-white text-[1.5rem] text-white mt-5 mb-0.5">
                Devtraco Foundation
              </h4>
              <span className="bg-white px-2 font-medium text-[0.75rem]">
                NGO
              </span>
              <p className="text-white mt-4">
                The Devtraco Foundation is a not-for-profit organization
                dedicated to enhancing lives. We have contributed to improvement
                in the lives of residents in Tema New-Town by providing
                assistance to teenage mothers, orphans and needy widows in
                collaboration with the MAHLEF Foundation. The foundation also
                provided essential items to school children in the Ayawaso
                municipality during the COVID-19 pandemic.
              </p>
            </div>
            <div className="w-full md:max-w-[26rem]">
              <div className="relative group/sub">
                <img
                  src="../property1.jpg"
                  alt=""
                  className="object-cover w-full"
                />
                <div className="group-hover/sub:flex hidden flex-col items-center justify-center bg-black bg-opacity-50 absolute inset-0">
                  <Button text="Learn More" isIcon={false} isOutlined={true} />
                  <span className="bg-white w-8 h-8 flex items-center justify-center rounded-full absolute right-4 top-4">
                    <svg
                      className="text-devtraco-blue"
                      width="20"
                      height="20"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="iconoir:arrow-tr">
                        <path
                          id="Vector"
                          d="M6 19.8484L19 6.84839M19 6.84839V19.3284M19 6.84839H6.52"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
              <h4 className="font-bold text-devetraco-white text-[1.5rem] text-white mt-5 mb-0.5">
                Devtraco Plus
              </h4>
              <span className="bg-white px-2 font-medium text-[0.75rem]">
                Real Estate
              </span>
              <p className="text-white mt-4">
                Devtraco Plus is an industry-leading, multiple award-winning
                luxury real estate developer in Ghana. With over 11 years of
                experience, Devtraco Plus has successfully carved a remarkable
                niche for its exclusive premium housing units in Cantonments,
                Roman Ridge, Airport Residential Area, Labone and Dzorwulu.
              </p>
            </div>
            <div className="w-full md:max-w-[26rem]">
              <div className="relative group/sub">
                <img
                  src="../property1.jpg"
                  alt=""
                  className="object-cover w-full"
                />
                <div className="group-hover/sub:flex hidden flex-col items-center justify-center bg-black bg-opacity-50 absolute inset-0">
                  <Button text="Learn More" isIcon={false} isOutlined={true} />
                  <span className="bg-white w-8 h-8 flex items-center justify-center rounded-full absolute right-4 top-4">
                    <svg
                      className="text-devtraco-blue"
                      width="20"
                      height="20"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="iconoir:arrow-tr">
                        <path
                          id="Vector"
                          d="M6 19.8484L19 6.84839M19 6.84839V19.3284M19 6.84839H6.52"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
              <h4 className="font-bold text-devetraco-white text-[1.5rem] text-white mt-5 mb-0.5">
                Talis Property Mangement
              </h4>
              <span className="bg-white px-2 font-medium text-[0.75rem]">
                Property Management
              </span>
              <p className="text-white mt-4">
                Talis provides superior value by securing the right tenants for
                client's properties, providing property valuations and property
                consultancy. Our clients trust Talis to maximise the returns on
                their property, and we do this while providing owners and
                clients with comfort and peace of mind.
              </p>
            </div>
            <div className="w-full md:max-w-[26rem]">
              <div className="relative group/sub">
                <img
                  src="../property1.jpg"
                  alt=""
                  className="object-cover w-full"
                />
                <div className="group-hover/sub:flex hidden flex-col items-center justify-center bg-black bg-opacity-50 absolute inset-0">
                  <Button text="Learn More" isIcon={false} isOutlined={true} />
                  <span className="bg-white w-8 h-8 flex items-center justify-center rounded-full absolute right-4 top-4">
                    <svg
                      className="text-devtraco-blue"
                      width="20"
                      height="20"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="iconoir:arrow-tr">
                        <path
                          id="Vector"
                          d="M6 19.8484L19 6.84839M19 6.84839V19.3284M19 6.84839H6.52"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
              <h4 className="font-bold text-devetraco-white text-[1.5rem] text-white mt-5 mb-0.5">
                Devtraco Hospitality Holdings
              </h4>
              <span className="bg-white px-2 font-medium text-[0.75rem]">
                Hospitality
              </span>
              <p className="text-white mt-4">
                This is the latest addition to the Devtraco Group, dedicated to
                managing the group's investments in the hospitality sector. One
                of our prime offerings is the Pelican Hotel Apartments,
                featuring one of the largest water parks in West Africa,
                promising an unforgettable experience. Our Labone, Accra
                location boasts two initial dining experiences - Brasa and Milk
                Box. At Brasa, indulge in the finest continental cuisine and our
                signature cocktails.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
