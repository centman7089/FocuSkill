// @ts-nocheck
import React from 'react'
import './Team.css'
import guy from '../../assets/guy.jpg'
import innocent from '../../assets/innocent.jpg'
import profile_img from '../../assets/profile_img.svg'
import { assets } from '../../3mtt_assets/assets'

const Team = () => {
  return (
    <div className='team'>
        <div className="team-title">
              <h1>Meet our Team</h1>
              <p>Meet the amazing team behind the app</p>
          </div>

      <div className="team-container">
          
        <div className='team-content'>
          <img src={assets.victoria} alt="" />
                  <h1>Folorunsho Victoria</h1>
                  <p>Product Manager</p>
        </div>
        <div className='team-content'>
                <img src={assets.innocent} alt="" />
                  <h1>Imitini Innocent</h1>
                  <p>Software Developer</p>
              </div>
              
              <div className='team-content'>
                <img src={assets.mariam} alt="" />
                  <h1>Anfela Fathia</h1>
                  <p>Product Manager</p>
              </div>
              <div className='team-content'>
                <img src={assets.kareem} alt="" />
                  <h1>Kareem Azeezat</h1>
                  <p>Product Designer</p>
              </div>
              <div className='team-content'>
                <img src={assets.joe} alt="" />
                  <h1>Salawu Joseph</h1>
                  <p>Software Developer</p>
        </div>
        
              <div className='team-content'>
                <img src={assets.damola} alt="" />
                  <h1>Mariam Oyindamola</h1>
                  <p>Product Designer</p>
              </div>
              
             
               
          </div>
    </div>
  )
}

export default Team
