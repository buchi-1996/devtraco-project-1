import React from 'react'
import PageBanner from '../components/PageBanner'
import headerBg from '../assets/Rectangle-3986.jpg'
import Button from '../components/Button'
import developement from '../assets/services-img/developement.jpg'
import construction from '../assets/services-img/construction.jpg'
import projectManagement from '../assets/services-img/project-management.jpg'
import hospitality from '../assets/services-img/hospitality.jpg'


const Services = () => {
  return (
    <main>
      <PageBanner img={headerBg} title="Our Services" subHeading="Welcome to Devtraco Group, where we redefine real estate excellence with our commitment to quality, innovation, and sustainability." />
      <section className='bg-devtraco-blue py-20 border-b border-gray-600'>
        <div className="container mx-auto">
          <div className='flex lg:flex-row flex-col lg:items-center space-y-10 lg:space-y-0 space-x-0 lg:space-x-16 my-10 lg:container mx-auto'>
            <div className='basis-2/5'>
              <img src={developement} alt="" className='w-full h-auto object-cover' />
            </div>
            <div className='flex-1'>
              <div>
                <h4 className='text-white font-bold text-[2.2rem]'>Development</h4>
              </div>
              <div className="prose min-w-full text-white mt-8 mb-4">
                <p>Devtraco Plus provides premium housing units in Accra's most
                  exclusive neighborhoods whiles Devtraco Limited builds sustainable communities targeted at middle-income earners. Devtraco converts dreams into design through world-class architectural expertise. Our design focuses on originality and sustainability.
                </p>
                <Button text="See Project" isIcon={true} />
              </div>
            </div>
          </div>
          <div className='flex lg:flex-row flex-col-reverse lg:items-center space-y-10 lg:space-y-0 space-x-0 lg:space-x-16 my-10 lg:container mx-auto'>
            <div className='flex-1 mt-8'>
              <div>
                <h4 className='text-white font-bold text-[2.2rem]'>Construction</h4>
              </div>
              <div className="prose min-w-full text-white mt-8">
                <p>Fabrico Builders are the craftsmen behind some of Accra’'s most
                  fascinating properties. Using the latest construction technology and know-how, our developments are built to be outstanding today and relevant for generations to come.
                </p>
                <Button text="See Project" isIcon={true} />
              </div>
            </div>
            <div className='basis-2/5'>
              <img src={construction} alt="" className='w-full h-auto object-cover' />
            </div>
          </div>
          <div className='flex lg:flex-row flex-col lg:items-center space-y-10 lg:space-y-0 space-x-0 lg:space-x-16 my-10 lg:container mx-auto'>
            <div className='basis-2/5'>
              <img src={projectManagement} alt="" className='w-full h-auto object-cover' />
            </div>
            <div className='flex-1'>
              <div>
                <h4 className='text-white font-bold text-[2.2rem]'>Property Management</h4>
              </div>
              <div className="prose min-w-full text-white mt-8 mb-4">
                <p>Talis Property Management helps clients generate passive
                  income from their property by renting out at the best rates to the most stress-free tenants. We provide state-of-the-art maintenance to preserve the integrity our clients’ investments.
                </p>
                <Button text="See Project" isIcon={true} />
              </div>
            </div>
          </div>
          <div className='flex lg:flex-row flex-col-reverse lg:items-center space-y-10 lg:space-y-0 space-x-0 lg:space-x-16 my-10 lg:container mx-auto'>
            <div className='flex-1 mt-8'>
              <div>
                <h4 className='text-white font-bold text-[2.2rem]'>Hospitality</h4>
              </div>
              <div className="prose min-w-full text-white mt-8">
                <p>Whether for business or leisure, the Pelican Hotel provides guests with
                  an experience that will be the high point of their travel, complete with one of the largest water parks in West Africa. Brasa and Milk box, which are a part of Devtraco Hospitality Holdings, offer a fresh experience of Accra’s premium contemporary  culture through continental cuisine, signature cocktails.
                </p>
                <Button text="See Project" isIcon={true} />
              </div>
            </div>
            <div className='basis-2/5'>
              <img src={hospitality} alt="" className='w-full h-auto object-cover' />
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}

export default Services