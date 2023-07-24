import React from 'react'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <main>
      <section className='pt-20 md:pt-28 pb-12'>
        <div className="container mx-auto">
          <div className='flex flex-col lg:flex-row items-start lg:items-end justify-between gap-y-6 gap-4'>
            <h1 className='text-devtraco-blue text-[3rem] md:text-[5rem] lg:text-[6rem] -mb-5 font-bold'>CONTACT US</h1>
            <p className='max-w-lg'>Here, you will find a curated selection of our exceptional projects that showcase the breadth and quality of our real estate developments.</p>
          </div>
        </div>
      </section>
      <section className=''>
        <div className="container mx-auto">
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-10 py-20 px-10 bg-devtraco-blue'>
            <div className='flex flex-col items-center justify-center gap-y-2'>
              <span className='mb-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
                  <path d="M38.2422 8H10.2422C8.65089 8 7.12477 8.63214 5.99955 9.75736C4.87433 10.8826 4.24219 12.4087 4.24219 14V34C4.24219 35.5913 4.87433 37.1174 5.99955 38.2426C7.12477 39.3679 8.65089 40 10.2422 40H38.2422C39.8335 40 41.3596 39.3679 42.4848 38.2426C43.61 37.1174 44.2422 35.5913 44.2422 34V14C44.2422 12.4087 43.61 10.8826 42.4848 9.75736C41.3596 8.63214 39.8335 8 38.2422 8ZM36.9022 12L24.2422 21.5L11.5822 12H36.9022ZM38.2422 36H10.2422C9.71175 36 9.20305 35.7893 8.82797 35.4142C8.4529 35.0391 8.24219 34.5304 8.24219 34V14.5L23.0422 25.6C23.3884 25.8596 23.8094 26 24.2422 26C24.6749 26 25.096 25.8596 25.4422 25.6L40.2422 14.5V34C40.2422 34.5304 40.0315 35.0391 39.6564 35.4142C39.2813 35.7893 38.7726 36 38.2422 36Z" fill="white" />
                </svg>
              </span>
              <div>
                <p className='text-white'>Support@Devtracogroup.com</p>
                <p className='text-white'>Support@Devtracogroup.com</p>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center gap-y-2'>
              <span className='mb-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
                  <path d="M36.3209 24.5859C36.1353 24.4 35.9149 24.2526 35.6723 24.1519C35.4297 24.0513 35.1696 23.9995 34.9069 23.9995C34.6443 23.9995 34.3842 24.0513 34.1415 24.1519C33.8989 24.2526 33.6785 24.4 33.4929 24.5859L30.3049 27.7739C28.8269 27.3339 26.0689 26.3339 24.3209 24.5859C22.5729 22.8379 21.5729 20.0799 21.1329 18.6019L24.3209 15.4139C24.5068 15.2283 24.6543 15.0079 24.7549 14.7653C24.8555 14.5227 24.9073 14.2626 24.9073 13.9999C24.9073 13.7372 24.8555 13.4772 24.7549 13.2345C24.6543 12.9919 24.5068 12.7715 24.3209 12.5859L16.3209 4.58591C16.1353 4.40002 15.9149 4.25255 15.6723 4.15193C15.4297 4.0513 15.1696 3.99951 14.9069 3.99951C14.6443 3.99951 14.3842 4.0513 14.1415 4.15193C13.8989 4.25255 13.6785 4.40002 13.4929 4.58591L8.06892 10.0099C7.30892 10.7699 6.88092 11.8139 6.89692 12.8799C6.94292 15.7279 7.69692 25.6199 15.4929 33.4159C23.2889 41.2119 33.1809 41.9639 36.0309 42.0119H36.0869C37.1429 42.0119 38.1409 41.5959 38.8969 40.8399L44.3209 35.4159C44.5068 35.2303 44.6543 35.0099 44.7549 34.7673C44.8555 34.5247 44.9073 34.2646 44.9073 34.0019C44.9073 33.7393 44.8555 33.4792 44.7549 33.2365C44.6543 32.9939 44.5068 32.7735 44.3209 32.5879L36.3209 24.5859ZM36.0669 38.0099C33.5709 37.9679 25.0309 37.2979 18.3209 30.5859C11.5889 23.8539 10.9369 15.2839 10.8969 12.8379L14.9069 8.82791L20.0789 13.9999L17.4929 16.5859C17.2578 16.8208 17.085 17.1106 16.99 17.4291C16.895 17.7475 16.8809 18.0846 16.9489 18.4099C16.9969 18.6399 18.1709 24.0939 21.4909 27.4139C24.8109 30.7339 30.2649 31.9079 30.4949 31.9559C30.82 32.0258 31.1575 32.0128 31.4762 31.9181C31.795 31.8234 32.0848 31.65 32.3189 31.4139L34.9069 28.8279L40.0789 33.9999L36.0669 38.0099Z" fill="white" />
                </svg>
              </span>
              <div>
                <p className='text-white'>T: +233 (0) 302 798 692</p>
                <p className='text-white'>C: +233 (0) 270 000 004</p>
              </div>
            </div>

            <div className='flex flex-col items-center justify-center gap-y-2'>
              <span className='mb-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="49" height="48" viewBox="0 0 49 48" fill="none">
                  <path d="M24.6621 13C25.9882 13 27.26 13.5268 28.1976 14.4645C29.1353 15.4021 29.6621 16.6739 29.6621 18C29.6621 18.6566 29.5328 19.3068 29.2815 19.9134C29.0302 20.52 28.6619 21.0712 28.1976 21.5355C27.7334 21.9998 27.1822 22.3681 26.5755 22.6194C25.9689 22.8707 25.3187 23 24.6621 23C23.336 23 22.0643 22.4732 21.1266 21.5355C20.1889 20.5979 19.6621 19.3261 19.6621 18C19.6621 16.6739 20.1889 15.4021 21.1266 14.4645C22.0643 13.5268 23.336 13 24.6621 13ZM24.6621 4C28.3751 4 31.9361 5.475 34.5616 8.1005C37.1871 10.726 38.6621 14.287 38.6621 18C38.6621 28.5 24.6621 44 24.6621 44C24.6621 44 10.6621 28.5 10.6621 18C10.6621 14.287 12.1371 10.726 14.7626 8.1005C17.3881 5.475 20.9491 4 24.6621 4ZM24.6621 8C22.0099 8 19.4664 9.05357 17.591 10.9289C15.7157 12.8043 14.6621 15.3478 14.6621 18C14.6621 20 14.6621 24 24.6621 37.42C34.6621 24 34.6621 20 34.6621 18C34.6621 15.3478 33.6085 12.8043 31.7332 10.9289C29.8578 9.05357 27.3143 8 24.6621 8Z" fill="white" />
                </svg>
              </span>
              <div>
                <p className='text-white text-center'>Devtraco Group Office No. 7 Noi Fetreke Street, Airport Residential Area Accra-Ghana</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-28">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-y-14 space-x-0 lg:space-x-20">
            <div className="w-full lg:max-w-[39rem]">
              <span className="text-primary-purple">_Contact Us</span>
              <h1 className="text-[3rem] text-devtraco-blue max-w-lg">
                Let's Start Building Together
              </h1>

              <ContactForm ondarkBg={false} />
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

export default Contact