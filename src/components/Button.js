import React from 'react'

const Button = ({text, isIcon, isOutlined}) => {

  if(isIcon){
    return (<button className="border flex flex-row flex-none items center hover:text-devtraco-blue space-x-4 border-white rounded pt-2.5 pb-2 px-7 transition-all  mt-8 group hover:bg-white">
              <span className="text-white text-[1rem] group-hover:text-black">{text}</span>
              <span>
                <svg
                className="group-hover:text-devtraco-blue text-emerald-50"
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
            </button>)
  }else{
  return (
    <button className={`${isOutlined ? 'bg-transparent' : 'bg-white'} border flex flex-row items flex-none center space-x-4 border-white rounded pt-2.5 pb-2 px-4 transition-all  mt-8 group ${isOutlined ? 'hover:bg-white' : 'hover:bg-transparent'}`}>
              <span className={`${isOutlined ? 'text-white' : 'text-devtraco-blue'} text-[1rem] ${isOutlined ? 'group-hover:text-devtraco-blue': 'group-hover:text-white'}`}>{text}</span>
            </button>
  )}
}

export default Button