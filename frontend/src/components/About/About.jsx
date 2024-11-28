// @ts-nocheck
import React from 'react'
import './About.css'
import Team from '../Team/Team'
import Journey from '../Journey/Journey'
import Phone from '../phone/Phone'
import AboutPhone from '../AboutPhone/AboutPhone'



const About = () => {
  return (
    <>
    <div id='about' className='about'>
      <div className="about-container">
            
          
            <h1>About</h1>
                  <span>Wee here to help you reach your goals by making productivity easy, effective, and enjoyable. 
                    Our app combines useful features like real-time tracking, organized task lists, a planning calendar, 
                    and focus modes that block distractions. Youll also earn coins for completing tasks, making progress 
                    fun and rewarding.
                    With a simple, user-friendly design, our app gives you all the tools you need to stay focused and 
                    get more done every day.</span>
         
          <div className="objectives-content">
          <h2>Objectives</h2>
                      <span>
            To minimize the usage of social media apps by the target audience by 50%,
            To help user achieve their goals & To help user spend less time on their devices.</span>
          </div>
        </div>
      
 
      </div>
     <AboutPhone/>
      <Team />
      <Journey/>
    </>
  )
}

export default About
