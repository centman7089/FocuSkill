// @ts-nocheck
import React from 'react'
import './Phone.css'
import { assets } from '../../3mtt_assets/assets'

const Phone = () => {
  return (
    <div className='phone'>
          <div className='img'>
              <img src={assets.img6} alt="" />
          </div>
          <div  className='content'>
              <h1>Take Control of Your Time, Achieve More with Ease.</h1>
              <p>Choose our productivity app 
              to take back control of your 
              time and break free from 
              endless distractions. 

              </p>
              <button>Sign Up Now</button>
          </div>
    </div>
  );
}

export default Phone
