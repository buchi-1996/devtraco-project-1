import React from 'react'
import ContactForm from '../components/ContactForm'
import TabGallery from '../components/TabGallery'

const Properties = () => {
    return (
        <main>
            <section className='pt-20 md:pt-28 lg:pb-12'>
                <div className="container mx-auto">
                    <div className='flex flex-col lg:flex-row items-start lg:items-end justify-between gap-y-6 gap-4'>
                        <h1 className='text-devtraco-blue text-[3rem] md:text-[5rem] lg:text-[6rem] lg:-mb-5 font-bold'>OUR PROPERTIES</h1>
                        <div>
                            <div className='flex items-start space-x-2'>
                                <span className='mb-2 bg-primary-purple w-[2.5rem] h-[2.5rem] rounded flex flex-col items-center justify-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clip-path="url(#clip0_378_8778)">
                                            <path d="M0.797868 23.9994C0.792863 23.8905 0.782227 23.7816 0.782227 23.6728C0.782227 17.2417 0.782227 10.8103 0.782227 4.37842C0.782227 3.98988 0.782227 3.98926 1.15763 3.98926H14.3405C14.7159 3.98926 14.7159 3.98926 14.7159 4.37967C14.7159 8.25131 14.7175 12.1227 14.7209 15.994C14.7202 16.2709 14.6396 16.5419 14.4887 16.7742C14.2679 17.1452 14.0564 17.2872 13.589 17.1934C12.7757 17.0313 11.9404 17.1433 11.1139 17.1308C10.5289 17.1214 9.94326 17.1345 9.35763 17.1258C9.16993 17.1258 9.09485 17.1696 9.0961 17.3729C9.10486 18.5673 9.08797 19.7617 9.10424 20.9555C9.11988 22.0629 9.47964 23.0509 10.2198 23.888C10.2505 23.923 10.2742 23.9637 10.3018 24.0013L0.797868 23.9994ZM9.05669 8.65862C9.05669 9.07969 9.06107 9.50139 9.05669 9.92247C9.05669 10.0733 9.11049 10.1327 9.2619 10.1296C9.58162 10.1239 9.90134 10.1246 10.2211 10.1296C10.3656 10.1296 10.4332 10.0858 10.4325 9.92872C10.4275 9.08658 10.4275 8.24422 10.4325 7.40165C10.4325 7.25024 10.3787 7.19143 10.2273 7.19456C9.91448 7.20081 9.60165 7.20519 9.28881 7.19456C9.10111 7.18705 9.04855 7.26588 9.05293 7.44482C9.0642 7.84713 9.05731 8.25319 9.05731 8.65862H9.05669ZM10.4282 13.6796C10.4282 13.2579 10.4282 12.8362 10.4282 12.4151C10.4282 12.2725 10.3887 12.1949 10.2317 12.1968C9.90384 12.2018 9.57599 12.2005 9.24814 12.1968C9.11049 12.1968 9.05293 12.2525 9.05356 12.3926C9.05648 13.2435 9.05648 14.0942 9.05356 14.9447C9.05356 15.0892 9.11612 15.1362 9.25002 15.1324C9.56973 15.1274 9.89008 15.1249 10.2098 15.1324C10.37 15.1368 10.4325 15.0817 10.4294 14.9172C10.4238 14.5067 10.4294 14.0932 10.4288 13.6796H10.4282ZM5.07243 8.63672C5.07243 9.0578 5.07869 9.47887 5.07243 9.89932C5.06868 10.0739 5.135 10.1339 5.30518 10.1289C5.60112 10.1196 5.89769 10.1214 6.19363 10.1289C6.35192 10.1321 6.41825 10.0751 6.41762 9.91183C6.41345 9.07761 6.41345 8.24338 6.41762 7.40916C6.41762 7.24586 6.35505 7.18955 6.19363 7.1933C5.89769 7.20019 5.60112 7.20144 5.30518 7.1933C5.135 7.18767 5.06805 7.24648 5.07243 7.42167C5.07869 7.82773 5.07243 8.23316 5.07243 8.63672ZM5.07243 13.6527C5.07243 14.0738 5.07744 14.4949 5.07243 14.9159C5.07243 15.078 5.12812 15.1387 5.29079 15.1337C5.59487 15.1255 5.89894 15.1274 6.20302 15.1337C6.3488 15.1337 6.41762 15.0886 6.41699 14.9334C6.41324 14.0913 6.41324 13.2489 6.41699 12.4064C6.41699 12.2581 6.35818 12.1936 6.20864 12.1961C5.9127 12.1999 5.61614 12.203 5.31957 12.1961C5.14126 12.1905 5.06931 12.2518 5.06931 12.4383C5.07932 12.8431 5.07243 13.2485 5.07243 13.6546V13.6527ZM5.07243 18.6243C5.07243 19.0453 5.07243 19.4664 5.07243 19.8875C5.07243 20.0258 5.10434 20.1127 5.26514 20.1102C5.58486 20.1058 5.90457 20.1102 6.22429 20.1102C6.36694 20.1102 6.41199 20.0395 6.41199 19.9063C6.41199 19.0641 6.41199 18.222 6.41199 17.3798C6.41199 17.2296 6.35505 17.1696 6.20426 17.1733C5.90019 17.1796 5.59549 17.1827 5.29142 17.1733C5.11185 17.1671 5.0643 17.2428 5.06743 17.4092C5.07806 17.8146 5.07243 18.2201 5.07243 18.6261V18.6243Z" fill="white" />
                                            <path d="M17.3777 23.9993C17.374 23.5082 17.3727 23.017 17.364 22.5259C17.364 22.3813 17.4472 22.2981 17.5354 22.2093C18.4683 21.277 19.3974 20.3417 20.3359 19.4157C20.4848 19.2686 20.5104 19.1742 20.3415 19.0278C20.141 18.8533 19.9529 18.6651 19.7784 18.4647C19.632 18.2976 19.5282 18.2932 19.3699 18.459C18.7498 19.0966 18.1185 19.721 17.4866 20.3492C17.2714 20.5638 17.2695 20.5638 17.18 20.271C16.9078 19.3583 16.3455 18.5592 15.5783 17.9948C15.44 17.8909 15.3987 17.8133 15.5064 17.6575C16.3341 16.4588 17.4566 15.7305 18.915 15.6072C20.2683 15.4927 21.6279 15.5841 22.9818 15.5641C23.1408 15.5641 23.2008 15.6266 23.2002 15.7887C23.1946 17.1301 23.254 18.4753 23.1789 19.8136C23.0694 21.7657 21.6148 23.4725 19.5882 23.9205C19.4743 23.9455 19.3611 23.9724 19.2479 23.9987L17.3777 23.9993Z" fill="white" />
                                            <path d="M13.0214 23.9991C12.2275 23.8164 11.5505 23.4453 11.0643 22.7734C10.6811 22.2641 10.4744 21.6438 10.4756 21.0065C10.4793 20.2419 10.4793 19.4774 10.4756 18.7128C10.4756 18.5501 10.5188 18.4625 10.6977 18.4675C11.5705 18.4882 12.4452 18.4212 13.3167 18.5044C14.6788 18.6346 15.862 19.8121 15.9871 21.1692C16.0741 22.1077 16.0115 23.0555 16.0209 23.9991H13.0214Z" fill="white" />
                                            <path d="M16.0612 10.7152C16.0612 9.34912 16.0612 7.98308 16.0612 6.61704C16.0612 6.29044 16.0668 6.28481 16.3821 6.28418C17.061 6.28418 17.7405 6.28919 18.4193 6.28418C18.6214 6.28418 18.7096 6.32985 18.709 6.55697C18.7015 9.03921 18.7015 11.521 18.709 14.0024C18.709 14.1814 18.6627 14.2646 18.4712 14.2927C17.6965 14.4071 16.9521 14.6742 16.2814 15.0786C16.0937 15.1887 16.0612 15.1618 16.0612 14.9084C16.0603 13.5098 16.0603 12.1121 16.0612 10.7152Z" fill="white" />
                                            <path d="M6.49881 0.00242701C7.63816 0.00242701 8.7775 0.0074319 9.91621 -0.00195312C10.144 -0.00195312 10.2353 0.0499779 10.229 0.295865C10.214 0.9841 10.2184 1.66921 10.229 2.35556C10.229 2.56078 10.1784 2.65025 9.955 2.64963C7.64504 2.64337 5.33528 2.64337 3.02573 2.64963C2.83803 2.64963 2.75732 2.59269 2.75982 2.39498C2.7665 1.68589 2.7665 0.9768 2.75982 0.26771C2.75982 0.0606135 2.83616 0.00117567 3.03637 0.00242701C4.18885 0.00805802 5.34195 0.00242701 6.49881 0.00242701Z" fill="white" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_378_8778">
                                                <rect width="22.4383" height="24" fill="white" transform="translate(0.78125)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <div className='mb-4'>
                                    <h4 className='font-bold text-[1.25rem]'>$250M</h4>
                                    <p className='text-[1rem] text-gray-700'>Delivered Project Value</p>
                                </div>
                            </div>
                            <p className='max-w-lg'>Here, you will find a curated selection of our exceptional projects that showcase the breadth and quality of our real estate developments.</p>

                        </div>
                    </div>
                </div>
            </section>
            <section className='py-10 md:py-10'>
                <div className="container mx-auto">
                    <TabGallery onDarkBg={false} />
                </div>
            </section>
            <section className="py-20 md:py-28">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-y-14 space-x-0 lg:space-x-20">
                        <div className="w-full lg:max-w-[39rem]">
                            <span className="text-primary-purple">_Contact Us</span>
                            <h1 className="text-[3rem] text-devtraco-blue max-w-lg">
                                Let's Start Building Together
                            </h1>

                            <ContactForm onDarkBg={false} />
                        </div>
                        <div className="w-full lg:max-w-xl">
                            <img
                                src="../facade-modern-building-with-geometric-windows-curved-walls 1.jpg"
                                alt=""
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Properties