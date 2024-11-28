import React from 'react'
import './Features.css'
import { assets } from '../../3mtt_assets/assets'

const Features = () => {
  return (
    <div className='features'>
          <div className='features-title'>
              <h1>Features</h1>
          </div>
          <div className="features-container">
              <div className="features-format">
                  <div className="features-content">
                      <img src={assets.img1} alt="" />
                      <div>
                           <h1>
                          Real Time Tracking:
                      </h1>
                      <p>Get insights on your screen time and app usage to understand where your time goes.</p>
                      </div>
                  </div>
              </div>
              <div className="features-format">
                  <div className="features-content">
                      <img src={assets.img7} alt="" />
                      <div>
                           <h1>
                       To-Do List with 
Labels:
                      </h1>
                      <p>Organize tasks with easy labels, making it simple to prioritize and focus.</p>
                      </div>
                  </div>
              </div>
              <div className="features-format">
                  <div className="features-content">
                      <img src={assets.image3} alt="" />
                      <div>
                           <h1>
                          Block Modes:
                      </h1>
                      <p>Temporarily block 
distracting apps to help 
you focus when it matters most.</p>
                      </div>
                  </div>
              </div>
              <div className="features-format">
                  <div className="features-content">
                      <img src={assets.img10} alt="" />
                      <div>
                           <h1>
                        Account Section:
                      </h1>
                      <p>Earn rewards for staying on track, motivating you to reach your goals.</p>
                      </div>
                  </div>
              </div>
              <div className="features-format">
                  <div className="features-content">
                      <img src={assets.img8} alt="" />
                      <div>
                           <h1>
                          Calender View:
                      </h1>
                      <p>Plan your day, week, or month to stay on top of 
your schedule.</p>
                      </div>
                  </div>
              </div>
              <div className="features-format">
                  <div className="features-content">
                      <img src={assets.image6} alt="" />
                      <div>
                           <h1>
                         User Friendly Interface:
                      </h1>
                      <p>Enjoy an intuitive design 
that makes tracking your progress easy and efficient.</p>
                      </div>
                  </div>
              </div>
          </div>

    </div>
  )
}

export default Features
