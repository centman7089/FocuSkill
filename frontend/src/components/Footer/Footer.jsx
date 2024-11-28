// @ts-nocheck
import React from 'react'
import './Footer.css'


import { Link } from 'react-router-dom'
import { assets } from '../../3mtt_assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
          <div className="footer-container">
             <div className='logo'>
                <Link className='logo' to='/'>
                <img src={assets.focus} alt="" />
                <p>FocuSkill</p>
                </Link>
              </div>
              <div className="footer-nav">
                  <div>
                      <p>  &copy;2024 Focus</p>
                      <p>All rights reserved</p>
                  </div>
            <ul className="footer-menu">
                    <Link
                    to="/"
                
                    >
                   Home
                    </Link>
                    <Link
                    to={'/service'}
                
                    >
                    Services{" "}
                    </Link>
                    <Link
                    to={'/about'}
                    
                    >
                    About
                    </Link>
                    <Link to='/contact'
                    
                    
                    >
                    Contact
                    </Link>

                    
                  </ul>
                  
                  <ul className="footer-menu">
        <Link
         href="http://facebook.com"
       
        >
          Facebook
        </Link>
        <Link
          href="http://instagram.com"
       
        >
          Instagram{" "}
        </Link>
                      <Link
                          href="http://linkedIn.com.com"
          to={'/LinkedIn.com'}
        
        >
          LinkedIn.com
        </Link>
        <Link to='/Twitter'
          href="http://x.com"
          
        >
          Twitter
        </Link>

        
                  </ul>
                  
                  <ul className="footer-menu">
                    <Link
                    to="/privacy"
                
                    >
                   Privacy policy
                    </Link>
                    <Link
                    to={'/Terms of Service'}
                
                    >
                    Terms of Services{" "}
                    </Link>
                  

                    
                  </ul>
                  
              </div>
        </div>
    </div>
  )
}

export default Footer
