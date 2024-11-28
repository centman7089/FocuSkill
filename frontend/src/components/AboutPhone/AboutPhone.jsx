// @ts-nocheck
import React from 'react'
import './AboutPhone.css'
import { assets } from '../../3mtt_assets/assets'

const AboutPhone = () => {
  return (
    <div className='phone'>
          <div className='img'>
              <img src={assets.img6} alt="" />
          </div>
          <div  className='content'>
              <h1>Let’s boost your
productivity and
work smarter today!</h1>
              
          </div>
    </div>
  );
}

export default AboutPhone
