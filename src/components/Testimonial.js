import React, { useState } from "react";

const testimonies = [
    {
        profilePic: "../Rectangle-857.jpg",
        testimony:
            "Working with Devtraco Group was a seamless and professional experience. Their expertise in property development and their commitment to delivering on time and within budget made them the perfect partner for our commercial project. We highly recommend Devtraco Group for any real estate development needs",
        name: "Amaka",
        job: "Simstress",
    },
    {
        profilePic: "../Rectangle-857.jpg",
        testimony:
            "Working with Devtraco Group was a seamless and professional experience. Their expertise in property development and their commitment to delivering on time and within budget made them the perfect partner for our commercial project. We highly recommend Devtraco Group for any real estate development needs",
        name: "Ola",
        job: "Business Man",
    },
    {
        profilePic: "../Rectangle-857.jpg",
        testimony:
            "Working with Devtraco Group was a seamless and professional experience. Their expertise in property development and their commitment to delivering on time and within budget made them the perfect partner for our commercial project. We highly recommend Devtraco Group for any real estate development needs",
        name: "Dapo",
        job: "Driver",
    },
    {
        profilePic: "../Rectangle-857.jpg",
        testimony:
            "Working with Devtraco Group was a seamless and professional experience. Their expertise in property development and their commitment to delivering on time and within budget made them the perfect partner for our commercial project. We highly recommend Devtraco Group for any real estate development needs",
        name: "Yusuf",
        job: "Cobler",
    },
    {
        profilePic: "../Rectangle-857.jpg",
        testimony:
            "Working with Devtraco Group was a seamless and professional experience. Their expertise in property development and their commitment to delivering on time and within budget made them the perfect partner for our commercial project. We highly recommend Devtraco Group for any real estate development needs",
        name: "Buchi",
        job: "Sales",
    },
];

const Testimonial = () => {
    const [count, setCount] = useState(0);

    const slideRight = () => {
        if (count === testimonies.length - 1) {
            setCount(0);
        }
        setCount((prev) => prev + 1);
    };

    const slideLeft = () => {
        if (count === 0) {
            setCount(testimonies.length - 1);
        }
        setCount((prev) => prev - 1);
    };

    return (
        <div className="my-10 py-10 flex flex-row items-start justify-center space-x-4 md:space-x-20">
            <span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="49"
                    height="49"
                    viewBox="0 0 49 49"
                    fill="none"
                >
                    <g clip-path="url(#clip0_266_8184)">
                        <path
                            d="M30.6934 48.8903V30.172C30.6934 11.6725 36.5071 1.9059 48.1346 0.87207V10.9245C43.9385 12.7489 41.8405 16.6167 41.8405 22.6919H48.1346V48.8903H30.6934Z"
                            fill="black"
                        />
                        <path
                            d="M0.0253906 48.8903V30.172C0.0253906 11.6725 5.83916 1.9059 17.4667 0.87207V10.9245C13.2706 12.7489 11.1725 16.6167 11.1725 22.6919H17.4667V48.8903H0.0253906Z"
                            fill="black"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_266_8184">
                            <rect
                                width="48.0912"
                                height="48"
                                fill="white"
                                transform="translate(0.0253906 0.87207)"
                            />
                        </clipPath>
                    </defs>
                </svg>
            </span>
            <div className="w-[53rem]">
                <div className="w-full">
                    <div className="relative overflow-x-hidden h-80">
                        {testimonies.map(({ profilePic, name, job, testimony }, index) => (
                            <div
                                key={index}
                                className={`${count === index ? "opacity-1 left-0" : "opacity-0 left-14"
                                    } min-w-full absolute transition-all ease-in duration-500 delay-[200ms] `}
                            >
                                <p className="md:text-xl mb-10 leading-6 md:leading-9">
                                    {testimony}
                                </p>
                                <div className="flex flex-row items-center gap-4 my-4">
                                    <div className="w-[3rem] h-[3rem] rounded-full bg-gray-50">
                                        <img
                                            src={profilePic}
                                            alt=""
                                            className="w-[3rem] h-[3rem] rounded-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-devtraco-blue font-bold text-xl">
                                            {name}
                                        </h4>
                                        <p className="font-medium text-gray-500">{job}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center space-x-2 justify-end">
                    <button
                        onClick={slideLeft}
                        className="focus:bg-devtraco-blue focus-within:text-white border border-devtraco-blue py-1 px-4 flex items-center justify-cneter"
                    >
                        <svg
                            className="w-8 h-8"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 37 36"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M34.3668 18C34.3668 18.2983 34.2482 18.5845 34.0372 18.7955C33.8263 19.0064 33.5401 19.125 33.2418 19.125L6.70751 19.125L13.7883 26.2035C13.9995 26.4147 14.1182 26.7012 14.1182 27C14.1182 27.2987 13.9995 27.5852 13.7883 27.7965C13.577 28.0077 13.2905 28.1264 12.9918 28.1264C12.693 28.1264 12.4065 28.0077 12.1953 27.7965L3.19526 18.7965C3.09049 18.692 3.00737 18.5678 2.95065 18.4311C2.89394 18.2945 2.86475 18.1479 2.86475 18C2.86475 17.852 2.89394 17.7055 2.95065 17.5688C3.00737 17.4321 3.09049 17.308 3.19526 17.2035L12.1953 8.20346C12.2999 8.09886 12.424 8.01589 12.5607 7.95928C12.6974 7.90267 12.8438 7.87353 12.9918 7.87353C13.2905 7.87353 13.577 7.99221 13.7883 8.20346C13.9995 8.4147 14.1182 8.70121 14.1182 8.99996C14.1182 9.2987 13.9995 9.58521 13.7883 9.79646L6.70751 16.875L33.2418 16.875C33.5401 16.875 33.8263 16.9935 34.0372 17.2045C34.2482 17.4154 34.3668 17.7016 34.3668 18Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={slideRight}
                        className="focus:bg-devtraco-blue focus-within:text-white border border-devtraco-blue py-1 px-4 flex items-center justify-cneter"
                    >
                        <svg
                            className="w-8 h-8"
                            xmlns="http://www.w3.org/2000/svg"
                            width="37"
                            height="36"
                            viewBox="0 0 37 36"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2.86665 18C2.86665 18.2983 2.98517 18.5845 3.19615 18.7955C3.40713 19.0064 3.69328 19.125 3.99165 19.125L30.5259 19.125L23.4451 26.2035C23.2339 26.4147 23.1152 26.7012 23.1152 27C23.1152 27.2987 23.2339 27.5852 23.4451 27.7965C23.6564 28.0077 23.9429 28.1264 24.2416 28.1264C24.5404 28.1264 24.8269 28.0077 25.0381 27.7965L34.0381 18.7965C34.1429 18.692 34.226 18.5678 34.2827 18.4311C34.3395 18.2945 34.3687 18.1479 34.3687 18C34.3687 17.852 34.3395 17.7055 34.2827 17.5688C34.226 17.4321 34.1429 17.308 34.0381 17.2035L25.0381 8.20346C24.9335 8.09886 24.8094 8.01589 24.6727 7.95928C24.536 7.90267 24.3896 7.87353 24.2416 7.87353C23.9429 7.87353 23.6564 7.99221 23.4451 8.20346C23.2339 8.4147 23.1152 8.70121 23.1152 8.99996C23.1152 9.2987 23.2339 9.58521 23.4451 9.79646L30.5259 16.875L3.99165 16.875C3.69328 16.875 3.40713 16.9935 3.19615 17.2045C2.98517 17.4154 2.86665 17.7016 2.86665 18Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
