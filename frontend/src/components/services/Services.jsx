// @ts-nocheck
import React from 'react'
import './Services.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import arrow_icon from "../../assets/arrow_icon.svg"


import Services_Data from '../../assets/services_data'
import Journey from '../Journey/Journey'


const Services = () => {
  return (
      <>
       <div id='services' className='services'>
          <div className="services-title">
              <h1>Our Services</h1>

          </div>
          <div className="services-content">
              <p>Our productivity app is designed to help you regain control over your time by reducing distractions 
and guiding you towards focused, purposeful actions each day. 
We offer tools that track your screen time, organize tasks, and temporarily block distracting apps, 
all aimed at helping you build better habits and reach your goals faster. 
With our app, you'll enjoy a balanced digital lifestyle,improved focus, and the satisfaction of 
consistent progress toward what truly matters.</p>
          </div>
          </div>
          <Journey/>
      </>
  )
}

export default Services
