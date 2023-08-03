import React from 'react'
import headerBg from '../assets/Rectangle-3086.jpg'
import PageBanner from '../components/PageBanner'
import ecobank from '../assets/partner-logos/ecobank.png'
import aleph from '../assets/partner-logos/aleph.png'
import gcb from '../assets/partner-logos/gcb.png'
import grit from '../assets/partner-logos/grit.png'
import gateway from '../assets/partner-logos/gateway.png'

const Partners = () => {
  return (
    <main>
      <PageBanner img={headerBg} title="Partnerships" subHeading="Welcome to Devtraco Group, where we redefine real estate excellence with our commitment to quality, innovation, and sustainability." />
      <section className='bg-devtraco-blue py-20 border-b border-gray-600'>
        <div className="container mx-auto">
          <div className="md:container mx-auto mb-20">
            <p className='text-white text-[1rem] leading-8'>Our exceptional developments would not be possible without partners who share in our vision. At Devtraco Group, we believe in developing long-standing mutually-beneficial partnerships which also create value for our clients. We take pride in the fact that our partners have continued to trust us to contribute positively to their businesses, and we look forward to several more years of rewarding partnerships.
            </p>
          </div>
          <div className='flex lg:flex-row flex-col lg:items-center space-y-10 lg:space-y-0 space-x-0 lg:space-x-16 my-10 lg:container mx-auto'>
          <div className='basis-2/5 min-h-[400px] bg-white flex flex-col items-center justify-center'>
              <img src={ecobank} alt="" className='w-auto h-auto object-contain' />
            </div>
            <div className='flex-1'>
              <div>
                <h4 className='text-white font-bold text-[2.2rem]'>Ecobank Ghana</h4>
              </div>
              <div className="prose  min-w-full text-white mt-8 mb-4">
                <p>Ecobank Ghana partnered with Devtraco Plus to finance the Pelican hotel development, giving investors the opportunity to own units in a premium hotel establishment which offers attractive returns.
                </p>
              </div>
            </div>
          </div>
          <div className='flex lg:flex-row flex-col-reverse lg:items-center space-y-10 lg:space-y-0 space-x-0 lg:space-x-16 my-10 lg:container mx-auto'>
            <div className='flex-1 mt-8'>
              <div>
                <h4 className='text-white font-bold text-[2.2rem]'>ALEPH Hospitality</h4>
              </div>
              <div className="prose min-w-full text-white mt-8">
                <p>Ensuring that a client's experience at the Pelican cannot
                  be replicated anywhere else, Devtraco has partnered  with Aleph hospitality, a reputable hotel management company based in Dubai. Aleph's expertise provides guests of the Pelican unparallel hospitality experience.
                </p>
              </div>
            </div>
            <div className='basis-2/5 min-h-[400px] bg-white flex flex-col items-center justify-center'>
              <img src={aleph} alt="" className='w-auto h-auto object-contain' />
            </div>
          </div>
          <div className='flex lg:flex-row flex-col lg:items-center space-y-10 lg:space-y-0 space-x-0 lg:space-x-16 my-10 lg:container mx-auto'>
          <div className='basis-2/5 min-h-[400px] bg-white flex flex-col items-center justify-center'>
              <img src={gcb} alt="" className='w-auto h-auto object-contain' />
            </div>
            <div className='flex-1'>
              <div>
                <h4 className='text-white font-bold text-[2.2rem]'>Ghana Commercial Bank</h4>
              </div>
              <div className="prose min-w-full text-white mt-8 mb-4">
                <p>Ghana Commercial Bank has been the financial partner of choice in the development of our NoVA projects located at Roman Ridge suburbs of Accra.
                </p>
              </div>
            </div>
          </div>
          <div className='flex lg:flex-row flex-col-reverse lg:items-center space-y-10 lg:space-y-0 space-x-0 lg:space-x-16 my-10 lg:container mx-auto'>
            <div className='flex-1 mt-8'>
              <div>
                <h4 className='text-white font-bold text-[2.2rem]'>Grit</h4>
              </div>
              <div className="prose min-w-full text-white mt-8">
                <p>Grit Real Estate Income Group is a leading pan-African real estate firm which is committed to making investments in and actively managing a diverse portfolio of assets in a number of carefully chosen African nations. Our strong partnership with Grit has provided development opportunities inside and outside of Ghana.
                </p>
              </div>
            </div>
            <div className='basis-2/5 min-h-[400px] bg-white flex flex-col items-center justify-center'>
              <img src={grit} alt="" className='w-auto h-auto object-contain' />
            </div>
          </div>
          <div className='flex lg:flex-row flex-col lg:items-center space-y-10 lg:space-y-0 space-x-0 lg:space-x-16 my-10 lg:container mx-auto'>
            <div className='basis-2/5 min-h-[400px] bg-white flex flex-col items-center justify-center'>
              <img src={gateway} alt="" className='w-auto h-auto object-contain' />
            </div>
            <div className='flex-1'>
              <div>
                <h4 className='text-white font-bold text-[2.2rem]'>Gateway Real Estate Africa</h4>
              </div>
              <div className="prose min-w-full text-white mt-8 mb-4">
                <p>Our partnership with Gateway Real Estate Africa (GREA) brings Devtraco Group into the long-term lease developments. This has been an exciting opportunity as we expand our business into different  asset classes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Partners