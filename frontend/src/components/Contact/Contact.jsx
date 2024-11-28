// @ts-nocheck
import React from 'react'
import { assets } from '../../3mtt_assets/assets'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-container">
        <div className="contact-image">
          <img src={assets.img6} alt="" />
        </div>
        <form className='contact-right'>
          <div className="contact-title">
            <h1>Contact</h1>
            <p>feel free to connect with us</p>
          </div>
         <label htmlFor="YourName">Name</label>
          <input id='YourName' type="text" placeholder='Enter your name' />
          <label htmlFor="YourEmail">Email</label>
          <input type="email" name='email' placeholder='Enter your email' />
          <label htmlFor="">Message</label>
          <textarea rows="6" placeholder='Enter your message'></textarea>
          <button type='submit' className='contact-submit'>Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
