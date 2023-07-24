import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import GallerryCard from '../components/GallerryCard';
import ContactForm from '../components/ContactForm';

const tabItems = [
  
  {
    id: 2,
    image: "../nova-renders-5.jpg",
    title: "The Peliccan",
    units: "134 Hotel Apartments",
    category: "completed",
  },
  {
    id: 3,
    image: "../forte 1.jpg",
    title: "The Peliccan",
    units: "134 Hotel Apartments",
    category: "upcoming",
  },
  {
    id: 4,
    image: "../henrietta 1.jpg",
    title: "The Peliccan",
    units: "134 Hotel Apartments",
    category: "upcoming",
  },
  {
    id: 5,
    image: "../niiyo.jpg",
    title: "The Peliccan",
    units: "134 Hotel Apartments",
    category: "ongoing",
  },
  {
    id: 6,
    image: "../1440x810_avant_garde_day_view 1.jpg",
    title: "The Peliccan",
    units: "134 Hotel Apartments",
    category: "ongoing",
  },
  {
    id: 7,
    image: "../plamers place.jpg",
    title: "The Peliccan",
    units: "134 Hotel Apartments",
    category: "ongoing",
  },
];

const Property = () => {
  const { id } = useParams();
  console.log(id);

  const relatedItems = () => {
    const newArr = tabItems.filter(item => item.id !== id).splice(0, 4);
    return newArr;
  }

 

  useEffect(() => {
    document.title = 'Property'
    console.log(document.title, id)
  }, [id])

  return (
    <main>
      <section className='py-20'>
        <div className="container mx-auto">
          <div className='grid grid-cols-1 lg:grid-cols-5 gap-6'>
            <div className='col-auto lg:col-span-3'>
              <div className='mb-6'>
                <img src="../sold-out-tag_the-edge.jpg" alt="" className='w-full' />
              </div>
              <div className='grid grid-cols-2 gap-y-6 gap-6'>
                <div className='bg-primary-purple h-[22rem]'></div>
                <div className='h-[22rem] bg-devtraco-primary-blue'></div>
              </div>
            </div>
            <div className='col-auto lg:col-span-2 lg:place-self-start w-full'>
              <div className='bg-gray-100 py-10 px-8 min-w-full'>
                <h1 className='text-[3rem] mb-4'>The Pelican</h1>
                <p className='text-[1rem]'>The New gold standard in passive income. Secure a stake in what will become the premier choice for a night of luxury in the heart of one Accra’s prime neighburhoods. Earn returns as your apartment is operated for you or take a visit yourself and enjoy your money’s worth</p>
                <hr className='my-10 bg-devtraco-blue h-2 rounded' />
                <table class="table-fixed w-full">
                  <tbody>
                    <tr>
                      <td className='pb-8 text-[1rem]'>Location:</td>
                      <td className='font-bold pb-8 text-[1.2rem]'>Cantoments</td>
                    </tr>
                    <tr>
                      <td className='pb-8 text-[1rem]'>Number of Units:</td>
                      <td className='font-bold pb-8 text-[1.2rem]'>134 Hotel Apartments</td>
                    </tr>
                    <tr>
                      <td className='pb-8 text-[1rem]'>Type of Units:</td>
                      <td className='font-bold pb-8 text-[1.2rem]'>Standard, Deluxe, Junior Suites & Executive Suites</td>
                    </tr>
                    <tr>
                      <td className='pb-8 text-[1rem]'>Size:</td>
                      <td className='font-bold pb-8 text-[1.2rem]'>39 sqm to 68.6 sqm</td>
                    </tr>
                    <tr>
                      <td className='pb-8 text-[1rem]'>Completion Date:</td>
                      <td className='font-bold pb-8 text-[1.2rem]'>Q3 2023</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button className='w-full bg-devtraco-blue text-white flex items-center justify-between lg:justify-around py-4 px-4 mt-6 gap-4 border border-transparent hover:border-devtraco-blue group hover:bg-white'><span className='text-[1rem] lg:text-xl group-hover:text-devtraco-blue'>Interested in property, find out more</span> <span><svg className='group-hover:text-devtraco-blue' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                <path d="M16.959 33.0601L33.0791 16.9399M33.0791 16.9399V32.4153M33.0791 16.9399H17.6038" stroke="currentColor" stroke-width="1.34334" stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="25.02" cy="25" r="23.5085" stroke="currentColor" stroke-width="1.34334" />
              </svg></span></button>
            </div>
          </div>
        </div>
      </section>
      <section className='py-20 bg-devtraco-blue'>
        <div className="container">
          <h1 className='text-[3rem] font-bold text-white mb-6'>Other Projects</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {relatedItems().map((items, index) => (<GallerryCard key={index} {...items} index={index} />))}
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

export default Property