// @ts-nocheck
import React from 'react'
import './Hero.css'
import { assets } from '../../3mtt_assets/assets'


const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className='first-div'>
        <div className="hero-content">
          <h1>Welcome to a 
world that helps 
you get the best 
            value for your time.</h1>
          <p>It helps you track and restrict your mobile usage</p>
          <button>Learn More</button>
        </div>
        <div className='hero-content-image'>
          <img src={assets.phone1} alt="" />
        </div>
      </div>
      <div className='second-div'>
        <div className='second-content'>
          <div className='box'>
            <div className="box-content gray"></div>
            <div className="box-content green"></div>
            <div className="box-content gray"></div>
            <div className="box-content green"></div>
            <div className="box-content gray"></div>
            <div className="box-content green"></div>
            <div className="box-content gray"></div>
            <div className="box-content green"></div>
            <div className="box-content gray"></div>
            <div className="box-content green"></div>
            <div className="box-content gray"></div>
          </div>
         </div>
      </div>
    </div>
  )
}

export default Hero
