import React from 'react'

const PageBanner = ({title, subHeading, img}) => {
  return (
    <div style={{ background: `linear-gradient(to bottom, rgba(7, 13, 40, 0.3), rgba(7, 13, 40, 0.4)), url(${img}) center/cover no-repeat` }}
        className={`bg-cover bg-opacity-50 h-[27rem] `}
      >
        <div className="container mx-auto h-full">
          <div className="flex flex-col items-center justify-center space-y-6 h-full">
            <h1 className="text-[4rem] font-bold text-white">{title}</h1>
            <p className="text-white max-w-xl text-center">
              {subHeading}
            </p>
          </div>
        </div>
      </div>
  )
}

export default PageBanner