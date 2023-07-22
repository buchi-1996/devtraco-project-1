import React from 'react'
import PageBanner from '../components/PageBanner'
import headerBg from '../assets/Rectangle-3886.jpg'

const Team = () => {
  return (
    <main>
      <PageBanner  img={headerBg} title="Our Team" subHeading="Welcome to Devtraco Group, where we redefine real estate excellence with our commitment to quality, innovation, and sustainability." />
      <div className="container mx-auto"></div>
    </main>
  )
}

export default Team