import React from 'react'
import PageBanner from '../components/PageBanner'
import headerBg from '../assets/Rectangle-3786.jpg'
import joseph from '../assets/teamphotos/Joseph-Aidoo-Jr.jpeg'
import john from '../assets/teamphotos/John-Entsuah.jpeg'
import alex from '../assets/teamphotos/Alex-Arkaah.jpeg'
import francis from '../assets/teamphotos/Francis-Okai-Okoh.jpeg'
import luis from '../assets/teamphotos/Luis-Alves.jpeg'
import imgplaceholder from '../assets/e797b39c8f94973a30980c470f36bdb6.jpeg'

const Team = () => {
  return (
    <main>
      <PageBanner img={headerBg} title="Our Team" subHeading="Welcome to Devtraco Group, where we redefine real estate excellence with our commitment to quality, innovation, and sustainability." />
      <section className='bg-devtraco-blue py-20'>
        <div className="container mx-auto">
          <div className='flex lg:flex-row flex-col lg:items-center space-y-10 lg:space-y-0 space-x-0 lg:space-x-16 my-10 lg:container mx-auto'>
            <div className='basis-2/5'>
              <img src={joseph} alt="" className='w-full h-auto object-cover' />
            </div>
            <div className='flex-1'>
              <div>
                <h4 className='text-white font-bold text-[2.2rem]'>Joseph Aidoo Jr.</h4>
                <p className='text-white mt-3 text-[1.3rem]'>Executive Director</p>
              </div>
              <div className="prose min-w-full text-white mt-8">
                <p>Joseph Aidoo Jr. is the Executive Director of Devtraco Group. With over a decade of experience in the realnestate industry, Joseph has established a proven track record of delivering quality, luxury, and high-end properties for both residential and commercial purposes,
                  Joseph's extensive career history includes serving as the Chief Executive Officer of Devtraco Plus Limited from 2011 to 2020 and as the Executive Director of Devtrace Limited from 2008 to the present. In addition, he has held director positions in several other companies, including PAN African Homes, Deviraco Woodlands Limited, Fabrico Engineers and Construction Limited, JRock Developers and Investment Limited, and more.
                </p>
              </div>
            </div>
          </div>
          <div className='flex lg:flex-row flex-col-reverse lg:items-center space-y-10 lg:space-y-0 space-x-0 lg:space-x-16 my-10 lg:container mx-auto'>
            <div className='flex-1 mt-8'>
              <div>
                <h4 className='text-white font-bold text-[2.2rem]'>John Entsuah</h4>
                <p className='text-white mt-3 text-[1.3rem]'>Group, C.E.O</p>
              </div>
              <div className="prose min-w-full text-white mt-8">
                <p>Today, Mr. John Entsuah leads the Devtraco Group of companies. Mr. Entsuah has theunique ability to see business opportunities and secures the relevant resources and capital needed to take advantage of those opportunities to create value for alln stakeholders. Before joining the Devtraco Group, Mr. John Entsuah was the founder and chief executive officer of Indigo Merchants Group LLC, a financial advisory and
                  business consulting firm based in Atlanta, Georgia. His experience also includesworking at blue chip financial companies such as Goldman Sachs and GE Capital as well as other industrial companies in the US, Europe, Asia & Latin America.
                </p>
              </div>
            </div>
            <div className='basis-2/5'>
              <img src={john} alt="" className='w-full h-[500px] object-cover' />
            </div>
          </div>
          <div className='flex lg:flex-row flex-col lg:items-center space-y-10 lg:space-y-0 space-x-0 lg:space-x-16 my-10 lg:container mx-auto'>
            <div className='basis-2/5'>
              <img src={alex} alt="" className='w-full h-auto object-cover' />
            </div>
            <div className='flex-1'>
              <div>
                <h4 className='text-white font-bold text-[2.2rem]'>Alex Arkaah</h4>
                <p className='text-white mt-3 text-[1.3rem]'>C.0.0/Head of Development</p>
              </div>
              <div className="prose min-w-full text-white mt-8">
                <p>Alexander is a seasoned leader with over 30 years of management experience. He excels in driving operational excellence, increasing profitability, and transforming underperforming departments. Alexander has a proven track record in Real Estate Development Management, Technical Design & Feasibility Engineering, Project & Construction Management, and Investment Consulting. Alexander's strategic vision,
                  innovative approach, and extensive experience make him a world-class leader capable of delivering exceptional results for any organization, and well-equipped to lead complex and specialist projects to successful completion.
                </p>
              </div>
            </div>
          </div>
          <div className='flex lg:flex-row flex-col-reverse lg:items-center space-y-10 lg:space-y-0 space-x-0 lg:space-x-16 my-10 lg:container mx-auto'>
            <div className='flex-1 mt-8'>
              <div>
                <h4 className='text-white font-bold text-[2.2rem]'>Francis Okai Okoh</h4>
                <p className='text-white mt-3 text-[1.3rem]'>Chief Finance Officer</p>
              </div>
              <div className="prose min-w-full text-white mt-8">
                <p>Mr. Francis Okai Okoh is a go-getter with over fifteen years of experience in progressive financial accounting, auditing, budgeting, and financial management at the corporate level, He has a higher in-depth knowledge of real estate operations, construction, and project financing and monitoring. He holds a Bachelor of Science Degree in Applied
                  Accounting from Oxford Brookes University one of the oldest universities in the U.K. and helds an Executive Master's in Business Administration-Finance from the University of Ghana Business School.
                </p>
              </div>
            </div>
            <div className='basis-2/5'>
              <img src={francis} alt="" className='w-full h-auto object-cover' />
            </div>
          </div>
          <div className='flex lg:flex-row flex-col lg:items-center space-y-10 lg:space-y-0 space-x-0 lg:space-x-16 my-10 lg:container mx-auto'>
            <div className='basis-2/5'>
              <img src={luis} alt="" className='w-full h-auto object-cover' />
            </div>
            <div className='flex-1'>
              <div>
                <h4 className='text-white font-bold text-[2.2rem]'>Luis Alves</h4>
                <p className='text-white mt-3 text-[1.3rem]'>General Manager (Fabrico)</p>
              </div>
              <div className="prose min-w-full text-white mt-8">
                <p>Luis Alves is a management executive with over 25 years of experience in
                  construction companies. Mr. Luis Alves has a degree in Civil Engineering, with a specialization in buildings construction, from a renowned university in Lisbon -Portugal. He also has additional expertise in Geotechnics and Construction Guality Systems.
                </p>
              </div>
            </div>
          </div>
          <div className='flex lg:flex-row flex-col-reverse lg:items-center space-y-10 lg:space-y-0 space-x-0 lg:space-x-16 my-10 lg:container mx-auto'>
            <div className='flex-1 mt-8'>
              <div>
                <h4 className='text-white font-bold text-[2.2rem]'>Kenneth Ruine</h4>
                <p className='text-white mt-3 text-[1.3rem]'>Sales and Marketing Director</p>
              </div>
              <div className="prose min-w-full text-white mt-8">
                <p>Kenneth Ruine, Sales and Marketing Director at Deviraco Group, has over 20 years of experience in luxury real estate and hotel investment sales. With expertise gained at Wright Investments Group UK, The First Group Dubai, and Diversified Resorts, he manages the sales and marketing department, develops and implements effective strategies, and provides training to the sales team. Kenneth's exceptional leadership and
                  sales training abilities drive sales and revenue growth for Devtraco Group.
                </p>
              </div>
            </div>
            <div className='basis-2/5'>
              <img src={imgplaceholder} alt="" className='w-full h-[500px] object-cover' />
            </div>
          </div>
          <div className='flex lg:flex-row flex-col lg:items-center space-y-10 lg:space-y-0 space-x-0 lg:space-x-16 my-10 lg:container mx-auto'>
          <div className='basis-2/5'>
              <img src={imgplaceholder} alt="" className='w-full h-[500px] object-cover' />
            </div>
            <div className='flex-1 mt-8'>
              <div>
                <h4 className='text-white font-bold text-[2.2rem]'>Merek Milton</h4>
                <p className='text-white mt-3 text-[1.3rem]'>Senior Project Manager</p>
              </div>
              <div className="prose min-w-full text-white mt-8">
                <p>Merek Milton is a seasoned Senior Project Manager at Devtraco Group, with 32 years of experience managing complex infrastructure projects. He is a registered Senior Construction Project Manager who uses innovative strategies, technology, and meticulous project execution to deliver on time and to required guality. Merek's diverse experience as a client-side, contractor-side, and consultant-side Senior Project Manager enables him to mitigate risks, negotiate successful outcomes anddirect teams to successful delivery. He has expertise in project management, quantity surveying, stakeholder management and sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Team