import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Destinations from '../components/Destinations'
import Packages from '../components/Packages'
import Highlights from '../components/Highlights'
import Testimonials from '../components/Testimonials'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <Packages />
      <Highlights />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home