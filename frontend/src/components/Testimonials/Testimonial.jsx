import React from 'react'
import './Testimonial.css'
import { assets } from '../../3mtt_assets/assets'

const Testimonial = () => {
  return (
    <div className='testimonial'>
          <div className='testimonial-title'>
              <h1>Testimonials</h1>
              <p>People love what we do, and we’re excited to share it with you.</p>
          </div>
          <div className="testimonial-container">
              <div className="testimonial-content">
                  <h2>“This app has transformed 
the way I organize
                      my day.”</h2>
                  <div className='testimonial-content-image'>
                      <img src={assets.Star} alt="" />
                      <img src={assets.Star} alt="" />
                      <img src={assets.Star} alt="" />
                      <img src={assets.Star} alt="" />
                      <img src={assets.Star} alt="" />
                  </div>
                  <h3>Victoria</h3>
              </div>
              <div className="testimonial-content">
                  <h2>“It’s simple to use, and I love how it keeps me on track with my goals.”</h2>
                  <div className='testimonial-content-image'>
                      <img src={assets.Star} alt="" />
                      <img src={assets.Star} alt="" />
                      <img src={assets.Star} alt="" />
                      <img src={assets.Star} alt="" />
                      <img src={assets.Star} alt="" />
                  </div>
                  <h3>Mariam</h3>
              </div>
              <div className="testimonial-content">
                  <h2>"I can easily manage my tasks and habits all in one place.”</h2>
                  <div className='testimonial-content-image'>
                      <img src={assets.Star} alt="" />
                      <img src={assets.Star} alt="" />
                      <img src={assets.Star} alt="" />
                      <img src={assets.Star} alt="" />
                      <img src={assets.Star} alt="" />
                  </div>
                  <h3>Azeezat</h3>
              </div>
          </div>
    </div>
  )
}

export default Testimonial
