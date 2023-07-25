import React from "react";

const ContactForm = ({ onDarkBg }) => {
    return (
        <form>
            <div className="grid grid-cols-2 gap-y-4 gap-4 my-6">
                <div>
                    <label htmlFor="firstname" className="sr-only">
                        First Name
                    </label>
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        autoComplete="off"
                        className={`focus:ring-devtraco-primary-blue  ${onDarkBg ? 'text-white' : 'text-black'} outline-none focus:ring mt-1 p-3 focus:border-devtraco-primary-blue border border-0.5 ${onDarkBg ? 'border-white' : 'border-devtraco-blue'} bg-transparent flex-1 block w-full rounded-[0.5rem] sm:text-sm`}
                        placeholder="First Name"
                    />
                </div>
                <div>
                    <label htmlFor="lastname" className="sr-only">
                        Last Name
                    </label>
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        autoComplete="off"
                        className={`focus:ring-devtraco-primary-blue outline-none ${onDarkBg ? 'text-white' : 'text-black'} focus:ring mt-1 p-3 focus:border-devtraco-primary-blue border border-0.5 ${onDarkBg ? 'border-white' : 'border-devtraco-blue'} bg-transparent flex-1 block w-full rounded-[0.5rem] sm:text-sm`}
                        placeholder="Last Name"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-y-4 gap-4 my-6">
                <div className={`flex items-center space-x-2 focus:ring-devtraco-primary-blue pr-3 focus:ring mt-1  focus:border-devtraco-primary-blue border border-1 ${onDarkBg ? 'border-white' : 'border-gray-500'} apperance-none bg-transparent w-full rounded-[0.5rem]`}>
                    <label htmlFor="email" className="sr-only">
                        Email Address
                    </label>
                    <span className="p-0">
                        <svg
                            className={`${onDarkBg ? 'text-white' : 'text-devtraco-blue'} `}
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="currentColor"
                        >
                            <path
                                d="M13.1167 19.3721C13.1167 19.0321 13.1567 18.7021 13.2067 18.3721H4.1167V8.37207L12.1167 13.3721L20.1167 8.37207V13.4621C20.8367 13.5821 21.5067 13.8321 22.1167 14.1821V6.37207C22.1167 5.27207 21.2167 4.37207 20.1167 4.37207H4.1167C3.0167 4.37207 2.1167 5.27207 2.1167 6.37207V18.3721C2.1167 19.4721 3.0167 20.3721 4.1167 20.3721H13.2067C13.1567 20.0421 13.1167 19.7121 13.1167 19.3721ZM20.1167 6.37207L12.1167 11.3721L4.1167 6.37207H20.1167ZM17.8667 22.5321L15.1167 19.5321L16.2767 18.3721L17.8667 19.9621L21.4567 16.3721L22.6167 17.7821L17.8667 22.5321Z"
                                fill="currentColor"
                            />
                        </svg>
                    </span>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="off"
                        className={`border-0 focus:outline-0 min-h-full py-3  border-transparent  focus:ring-0 ${onDarkBg ? 'text-white' : 'text-black'} bg-transparent sm:text-sm w-full outline-none`}
                        placeholder="Email Address"
                    />
                </div>
                <div className={`flex items-center space-x-2 focus:ring-devtraco-primary-blue  focus:ring mt-1  pr-3 focus:border-devtraco-primary-blue border border-1 ${onDarkBg ? 'border-white' : 'border-gray-500'} apperance-none bg-transparent w-full rounded-[0.5rem]`}>
                    <label htmlFor="phone" className="sr-only">
                        Phone Number
                    </label>
                    <span className="p-0">
                        <svg
                            className={`${onDarkBg ? 'text-white' : 'text-devtraco-blue'} stroke-transparent`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="24"
                            viewBox="0 0 25 24"
                            fill="none"
                        >
                            <path
                                d="M21.6816 16.162V18.7588C21.6826 18.9999 21.631 19.2385 21.5303 19.4594C21.4295 19.6803 21.2817 19.8786 21.0963 20.0415C20.911 20.2045 20.6921 20.3286 20.4538 20.4058C20.2155 20.4831 19.963 20.5117 19.7125 20.49C16.9331 20.2006 14.2632 19.2904 11.9175 17.8326C9.73512 16.5036 7.88484 14.7304 6.49806 12.639C4.97156 10.3808 4.02159 7.80976 3.7251 5.13418C3.70253 4.89481 3.73222 4.65356 3.81227 4.42579C3.89232 4.19801 4.02098 3.98871 4.19006 3.8112C4.35915 3.63369 4.56494 3.49187 4.79435 3.39476C5.02377 3.29765 5.27176 3.24738 5.52256 3.24715H8.23228C8.67063 3.24302 9.09559 3.39178 9.42796 3.6657C9.76033 3.93963 9.97742 4.32003 10.0388 4.736C10.1531 5.56704 10.3652 6.38301 10.671 7.16835C10.7926 7.47817 10.8189 7.81489 10.7468 8.1386C10.6748 8.4623 10.5074 8.75944 10.2646 8.99478L9.11746 10.0941C10.4033 12.2612 12.2756 14.0555 14.5369 15.2877L15.684 14.1884C15.9296 13.9557 16.2397 13.7953 16.5774 13.7263C16.9152 13.6572 17.2666 13.6824 17.5899 13.7989C18.4094 14.092 19.2608 14.2952 20.128 14.4048C20.5667 14.4641 20.9675 14.6759 21.2539 14.9999C21.5403 15.3239 21.6925 15.7375 21.6816 16.162Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </span>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="off"
                        className={`border-0  focus:outline-0 h-full py-3 border-transparent focus:ring-0 ${onDarkBg ? 'text-white' : 'text-black'} bg-transparent sm:text-sm w-full outline-none`}
                        placeholder="Phone Number"
                    />
                </div>
            </div>
            <div class="my-6">
                <label htmlFor="intrest" className="sr-only">
                    Intersted In
                </label>
                <select
                    id="interest"
                    name="interest"
                    autocomplete="off"
                    className={`focus:ring-devtraco-primary-blue ${onDarkBg ? 'text-white' : 'text-black'} outline-none focus:ring mt-1 p-3 focus:border-devtraco-primary-blue border border-0.5 ${onDarkBg ? 'border-white' : 'border-gray-500'} bg-transparent flex-1 block w-full rounded-[0.5rem]  sm:text-sm sm:leading-6`}
                >
                    <option className="text-black">I need Assistance with</option>
                    <option className="text-devtraco-blue">Canada</option>
                    <option className="text-devtraco-blue">Mexico</option>
                </select>
            </div>
            <div className="my-6">
                <label htmlFor="message" className="sr-only">
                    Message
                </label>

                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="7"
                    placeholder="Message"
                    className={`focus:ring-devtraco-primary-blue ${onDarkBg ? 'text-white' : 'text-black'} outline-none focus:ring mt-1 p-3 focus:border-devtraco-primary-blue border border-0.5 ${onDarkBg ? 'border-white': 'border-devtraco-blue'} bg-transparent flex-1 block w-full rounded-[0.5rem]  sm:text-sm sm:leading-6`}
                />
            </div>
            <button
                type="submit"
                className={`flex items-center py-3 px-5 font-medium ${onDarkBg ? 'bg-white text-devtraco-blue' : 'bg-devtraco-blue text-white'} space-x-3 justify-center`}
            >
                <span>
                    <svg
                    className={`${onDarkBg ? 'text-devtraco-blue' : 'text-white'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="currentColor"
                    >
                        <g clip-path="url(#clip0_266_8205)">
                            <path
                                d="M22.1167 5.87207H9.1167C8.0167 5.87207 7.1167 6.77207 7.1167 7.87207V16.8721C7.1167 17.4025 7.32741 17.9112 7.70249 18.2863C8.07756 18.6614 8.58627 18.8721 9.1167 18.8721H22.1167C23.2267 18.8721 24.1167 17.9821 24.1167 16.8721V7.87207C24.1167 7.34164 23.906 6.83293 23.5309 6.45786C23.1558 6.08278 22.6471 5.87207 22.1167 5.87207ZM22.1167 16.8721H9.1167V9.54207L15.6167 12.8721L22.1167 9.54207V16.8721ZM15.6167 11.1821L9.1167 7.87207H22.1167L15.6167 11.1821ZM5.1167 16.8721C5.1167 17.0421 5.1467 17.2021 5.1667 17.3721H1.1167C0.564699 17.3721 0.116699 16.9221 0.116699 16.3721C0.116699 15.8221 0.564699 15.3721 1.1167 15.3721H5.1167V16.8721ZM3.1167 7.37207H5.1667C5.1467 7.54207 5.1167 7.70207 5.1167 7.87207V9.37207H3.1167C2.5667 9.37207 2.1167 8.92207 2.1167 8.37207C2.1167 7.82207 2.5667 7.37207 3.1167 7.37207ZM1.1167 12.3721C1.1167 11.8221 1.5667 11.3721 2.1167 11.3721H5.1167V13.3721H2.1167C1.5667 13.3721 1.1167 12.9221 1.1167 12.3721Z"
                                fill="currentColor"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_266_8205">
                                <rect
                                    width="24"
                                    height="24"
                                    fill="white"
                                    transform="translate(0.116699 0.37207)"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </span>
                <span>Send a Message</span>
            </button>
        </form>
    );
};

export default ContactForm;
