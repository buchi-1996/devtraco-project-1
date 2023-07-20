import React from "react";

const Footer = () => {
  return (
    <footer className="py-20 bg-devtraco-blue">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-4 md:grid-cols-5 gap-y-6 sm:gap-6">
          <div className="mb-4 sm:max-w-[26rem] col-span-2">
            <img
              src="../devtraco-logo-1.svg"
              alt=""
              className="w-[10rem] object-contain "
            />
            <p className="text-devtraco-white my-4">
              Devtraco Group is a prominent property development company
              headquartered in Accra, Ghana. With a diverse portfolio, the
              company caters to a wide range of market segments, from premium
              residential and commercial properties aimed at the high-end market
              to affordable housing developments targeting the middle and
              low-income segments.
            </p>
            <div className="flex flex-row items-center space-x-4 mt-8">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M12.9436 10.2187C12.3483 10.2189 11.7663 10.3957 11.2714 10.7266C10.7764 11.0576 10.3907 11.5278 10.163 12.078C9.93534 12.6281 9.87588 13.2334 9.99217 13.8173C10.1085 14.4012 10.3953 14.9376 10.8164 15.3585C11.2374 15.7794 11.7739 16.066 12.3578 16.1821C12.9418 16.2982 13.5471 16.2385 14.0971 16.0106C14.6472 15.7827 15.1173 15.3968 15.4481 14.9018C15.7788 14.4067 15.9553 13.8247 15.9553 13.2293C15.9547 12.4308 15.6372 11.6652 15.0725 11.1007C14.5078 10.5362 13.7421 10.219 12.9436 10.2187ZM19.9824 7.90461C19.8292 7.5162 19.5977 7.16343 19.3025 6.86818C19.0072 6.57293 18.6545 6.34149 18.2661 6.18823C17.0808 5.72033 14.2587 5.82531 12.9436 5.82531C11.6286 5.82531 8.80931 5.71638 7.62066 6.18823C7.23225 6.34149 6.87948 6.57293 6.58423 6.86818C6.28898 7.16343 6.05754 7.5162 5.90428 7.90461C5.43694 9.08988 5.54136 11.9148 5.54136 13.2287C5.54136 14.5427 5.43694 17.3642 5.90653 18.5534C6.0598 18.9418 6.29123 19.2946 6.58649 19.5898C6.88174 19.8851 7.23451 20.1165 7.62291 20.2698C8.80818 20.7377 11.6302 20.6327 12.9459 20.6327C14.2615 20.6327 17.0797 20.7416 18.2683 20.2698C18.6567 20.1165 19.0095 19.8851 19.3047 19.5898C19.6 19.2946 19.8314 18.9418 19.9847 18.5534C20.456 17.3681 20.3476 14.5432 20.3476 13.2293C20.3476 11.9153 20.456 9.09439 19.9847 7.90517L19.9824 7.90461ZM12.9436 17.8575C12.0283 17.8575 11.1335 17.586 10.3724 17.0775C9.61125 16.5689 9.01805 15.8461 8.66775 15.0004C8.31745 14.1547 8.2258 13.2241 8.40438 12.3264C8.58296 11.4286 9.02375 10.6039 9.67101 9.95666C10.3183 9.3094 11.1429 8.8686 12.0407 8.69002C12.9385 8.51144 13.8691 8.6031 14.7148 8.95339C15.5605 9.30369 16.2833 9.8969 16.7918 10.658C17.3004 11.4191 17.5718 12.3139 17.5718 13.2293C17.5726 13.8373 17.4534 14.4394 17.221 15.0013C16.9887 15.5631 16.6478 16.0736 16.2179 16.5036C15.788 16.9335 15.2775 17.2744 14.7156 17.5067C14.1538 17.739 13.5516 17.8582 12.9436 17.8575ZM17.7626 9.48722C17.5489 9.48734 17.34 9.42407 17.1623 9.30544C16.9845 9.1868 16.846 9.01812 16.7641 8.82074C16.6823 8.62335 16.6608 8.40612 16.7024 8.19653C16.7441 7.98694 16.8469 7.79439 16.998 7.64326C17.149 7.49212 17.3415 7.38918 17.5511 7.34745C17.7606 7.30572 17.9779 7.32708 18.1753 7.40883C18.3727 7.49058 18.5415 7.62904 18.6602 7.8067C18.7789 7.98437 18.8423 8.19325 18.8423 8.40694C18.8429 8.54884 18.8155 8.68946 18.7616 8.82074C18.7077 8.95201 18.6285 9.07136 18.5284 9.17194C18.4283 9.27251 18.3093 9.35234 18.1783 9.40683C18.0473 9.46132 17.9068 9.48941 17.7649 9.48948L17.7626 9.48722ZM22.8773 0.586426H3.00996C2.29144 0.586426 1.60235 0.871857 1.09428 1.37993C0.586212 1.888 0.300781 2.57709 0.300781 3.29561L0.300781 23.163C0.300781 23.8815 0.586212 24.5706 1.09428 25.0786C1.60235 25.5867 2.29144 25.8721 3.00996 25.8721H22.8773C23.5958 25.8721 24.2849 25.5867 24.793 25.0786C25.3011 24.5706 25.5865 23.8815 25.5865 23.163V3.29561C25.5865 2.57709 25.3011 1.888 24.793 1.37993C24.2849 0.871857 23.5958 0.586426 22.8773 0.586426ZM21.911 16.9544C21.8382 18.401 21.508 19.6828 20.452 20.736C19.396 21.7892 18.1154 22.1261 16.6705 22.195C15.1798 22.2791 10.7108 22.2791 9.2202 22.195C7.77361 22.1222 6.49635 21.7914 5.43864 20.736C4.38092 19.6805 4.04849 18.3982 3.97963 16.9544C3.89553 15.4632 3.89553 10.9936 3.97963 9.50416C4.05244 8.05756 4.37867 6.77578 5.43864 5.72259C6.4986 4.66939 7.77926 4.33639 9.2202 4.26753C10.7108 4.18343 15.1798 4.18343 16.6705 4.26753C18.1171 4.34034 19.3983 4.67108 20.452 5.72654C21.5058 6.78199 21.8422 8.06434 21.911 9.51093C21.9951 10.9965 21.9951 15.4621 21.911 16.9544Z"
                    fill="#F9FAFB"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.586426 2.69894C0.586426 2.13866 0.808993 1.60134 1.20516 1.20517C1.60134 0.808996 2.13866 0.586429 2.69893 0.586429H23.7573C24.035 0.585975 24.31 0.640291 24.5666 0.746265C24.8233 0.852239 25.0565 1.00779 25.2529 1.20402C25.4494 1.40024 25.6052 1.63328 25.7114 1.8898C25.8177 2.14632 25.8723 2.42128 25.8721 2.69894V23.7573C25.8724 24.035 25.818 24.3101 25.7119 24.5667C25.6058 24.8234 25.4501 25.0566 25.2538 25.253C25.0575 25.4494 24.8244 25.6052 24.5678 25.7114C24.3112 25.8177 24.0362 25.8723 23.7585 25.8721H2.69893C2.42142 25.8721 2.14662 25.8175 1.89025 25.7112C1.63387 25.605 1.40094 25.4493 1.20476 25.253C1.00858 25.0567 0.852997 24.8237 0.746901 24.5673C0.640805 24.3108 0.586275 24.036 0.586426 23.7585V2.69894ZM10.595 10.2272H14.0189V11.9466C14.5131 10.9582 15.7774 10.0686 17.6773 10.0686C21.3196 10.0686 22.1827 12.0374 22.1827 15.6498V22.3413H18.4968V16.4728C18.4968 14.4154 18.0025 13.2546 16.7474 13.2546C15.0062 13.2546 14.2821 14.5062 14.2821 16.4728V22.3413H10.595V10.2272ZM4.27354 22.1839H7.96066V10.0686H4.27354V22.1827V22.1839ZM8.48821 6.1171C8.49516 6.4328 8.43899 6.7467 8.32298 7.04039C8.20697 7.33408 8.03347 7.60165 7.81266 7.82737C7.59185 8.0531 7.32817 8.23245 7.03711 8.3549C6.74604 8.47734 6.43345 8.54041 6.11768 8.54041C5.8019 8.54041 5.48931 8.47734 5.19825 8.3549C4.90718 8.23245 4.64351 8.0531 4.42269 7.82737C4.20188 7.60165 4.02838 7.33408 3.91237 7.04039C3.79636 6.7467 3.74019 6.4328 3.74714 6.1171C3.76079 5.49744 4.01653 4.90775 4.45961 4.47432C4.90268 4.0409 5.49786 3.79819 6.11768 3.79819C6.73749 3.79819 7.33267 4.0409 7.77575 4.47432C8.21882 4.90775 8.47457 5.49744 8.48821 6.1171Z"
                    fill="#F9FAFB"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                >
                  <path
                    d="M23.4486 0.586426H3.58125C2.08556 0.586426 0.87207 1.79991 0.87207 3.29561V23.163C0.87207 24.6587 2.08556 25.8721 3.58125 25.8721H23.4486C24.9443 25.8721 26.1578 24.6587 26.1578 23.163V3.29561C26.1578 1.79991 24.9443 0.586426 23.4486 0.586426ZM20.6886 9.54931C20.6999 9.70735 20.6999 9.87103 20.6999 10.0291C20.6999 14.9225 16.9748 20.561 10.168 20.561C8.06834 20.561 6.12111 19.9514 4.48432 18.9016C4.78345 18.9355 5.07131 18.9468 5.37609 18.9468C7.10884 18.9468 8.70048 18.3598 9.97041 17.3664C8.3449 17.3326 6.97902 16.2658 6.51056 14.7984C7.08062 14.883 7.59423 14.883 8.18122 14.7306C6.48798 14.3863 5.21805 12.8963 5.21805 11.0958V11.0506C5.70909 11.3272 6.28479 11.4965 6.88872 11.5191C6.38099 11.1814 5.96476 10.7232 5.67719 10.1855C5.38961 9.64776 5.23963 9.04721 5.24063 8.43742C5.24063 7.74883 5.42124 7.11669 5.74296 6.56921C7.56601 8.81557 10.3034 10.283 13.3738 10.4411C12.8489 7.92944 14.7284 5.89191 16.9861 5.89191C18.0528 5.89191 19.0123 6.3378 19.6896 7.06025C20.5249 6.90221 21.3264 6.59178 22.0376 6.16847C21.761 7.02638 21.1797 7.74883 20.4121 8.20601C21.1571 8.12699 21.8795 7.91815 22.5455 7.6303C22.0432 8.36969 21.4111 9.0244 20.6886 9.54931Z"
                    fill="#F9FAFB"
                  />
                </svg>
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <path
                    d="M4.77473 0.586426C2.21711 0.586426 0.157715 2.64582 0.157715 5.20344V21.2551C0.157715 23.8128 2.21711 25.8722 4.77473 25.8722H13.4746V15.987H10.8607V12.4281H13.4746V9.38745C13.4746 6.99858 15.019 4.8052 18.5768 4.8052C20.0173 4.8052 21.0825 4.94348 21.0825 4.94348L20.9987 8.26699C20.9987 8.26699 19.9123 8.25672 18.7269 8.25672C17.4439 8.25672 17.2382 8.84785 17.2382 9.82919V12.4281H21.1006L20.9323 15.987H17.2382V25.8722H20.8264C23.384 25.8722 25.4434 23.8128 25.4434 21.2552V5.20347C25.4434 2.64585 23.384 0.586451 20.8264 0.586451H4.77471L4.77473 0.586426Z"
                    fill="#F9FAFB"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="sm:max-w-[12rem]">
            <h4 className="text-[1.5rem] font-bold text-devtraco-white">
              Company
            </h4>
            <ul className="my-4 flex flex-col space-y-4">
              <li className="text-devtraco-white cursor-pointer hover:text-devtraco-primary-blue transition-all">About Us</li>
              <li className="text-devtraco-white cursor-pointer hover:text-devtraco-primary-blue transition-all">FAQ</li>
              <li className="text-devtraco-white cursor-pointer hover:text-devtraco-primary-blue transition-all">Subsidiaries</li>
              <li className="text-devtraco-white cursor-pointer hover:text-devtraco-primary-blue transition-all">Projects</li>
            </ul>
          </div>
          <div className="sm:max-w-[14rem]">
            <h4 className="text-[1.5rem] font-bold text-devtraco-white">
              Contact
            </h4>
            <ul className="my-4 lex flex-col space-y-4">
              <li className="text-devtraco-white">T: +233 (0) 302 798 692 </li>
              <li className="text-devtraco-white">C: +233 (0) 270 000 004</li>
            </ul>
          </div>
          <div className="sm:max-w-[12rem]">
            <h4 className="text-[1.5rem] font-bold text-devtraco-white">
              Visit Us
            </h4>
            <p className="text-devtraco-white my-4">
              Devtraco Group Office No. 7 Noi Fetreke Street, Airport
              Residential Area Accra-Ghana
            </p>
          </div>
        </div>
        <div className="border-t border-neutral-400 pt-10 mt-10">
          <p className="text-devtraco-white">© Built by Ispace Technologies  @ 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
