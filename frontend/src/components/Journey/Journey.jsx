import React from 'react'
import './Journey.css'
import { assets } from '../../3mtt_assets/assets'

const Journey = () => {
  return (
      <div className='journey'>
          <div className="journey-container">
              <div className='journey-content'>
              <h1>Start your journey 
                      with FocusKill today</h1>
                  <p>Start Streamlining Your Workflow Today!"</p>
                  <button>Sign up now</button>
              </div>
          <div className="journey-image">
              <img src={assets.Vector} alt="" />
          </div>
          </div>
          
    </div>
  )
}

export default Journey
