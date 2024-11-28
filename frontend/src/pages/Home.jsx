import React from 'react'
import Hero from '../components/Hero/Hero'
import Phone from '../components/phone/Phone'
import NewPage from '../components/NewPage/NewPage'
import Features from '../components/Features/Features'
import Testimonial from '../components/Testimonials/Testimonial'
import Contact from '../components/Contact/Contact'

const Home = () => {
  return (
    <div>
          <Hero />
          <Phone />
          <NewPage />
          <Features />
      <Testimonial />
     
    </div>
  )
}

export default Home
