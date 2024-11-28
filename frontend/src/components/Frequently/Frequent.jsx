import React from 'react'
import './Frequent.css'

const Frequent = () => {
  return (
    <div className='frequent'>
        <div className="frequent-title">
             <h1>Frequently Asked Questions</h1> 
          </div>
          <div className='frequent-container'>
              <div className='frequent-left'>
                  <div>
                       <h2>1. What is the purpose of this productivity app?</h2>
                        <span> Our app helps users regain control over their time by reducing 
    distractions, organizing tasks, and building better habits, all to 
    help you reach your goals more efficiently.</span>
                  </div>

                  <div>
                      <h2>2. How does the app reduce distractions?</h2>
                      <span>   The app offers tools like screen time tracking and customizable 
   blocking of distracting apps, allowing you to focus on important 
   tasks without unnecessary interruptions.</span>
                  </div>


                <div>
                      <h2>3. Can I use the app to track my daily progress? </h2> 
                      <span>  Yes, our app provides daily insights into your screen time and 
   task completion to help you monitor your progress and make 
   adjustments as needed.</span>
                </div>


                <div>
                      <h2>4. Does the app have a calendar feature?</h2>
                      <span>  Yes, our app includes a calendar view to help you plan and 
   schedule tasks for both daily and long-term goals.</span>
                </div>

 
 

              </div>

              <div className="frequent-right">
                  <div>
                      <h2>  5. Can I customize the app to fit my productivity needs?</h2>
                      <span>   Absolutely! You can tailor your task lists, set app-blocking 
                        preferences, and track only the apps or activities you want 
                        to monitor.</span>
                  </div>
                
                    <div>
                      <h2>6. How does the app help build better habits?</h2>
                      <span>
   By consistently blocking distractions and helping you set 
   manageable goals, our app makes it easier to establish 
                  productive routines and stay on track.</span>
                    </div>


                  
                   <div>
                      <h2>7. Is my data private and secure?</h2>
                      <span> Yes, we prioritize user privacy and data security. All data is 
   stored securely, and we follow strict privacy practices to 
    protect your information.</span>
                    </div>



  
              </div>
          </div>
    </div>
  )
}

export default Frequent
