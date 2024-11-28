// @ts-nocheck
import React from 'react'
import { assets } from '../../3mtt_assets/assets.js'
import './Newpage.css'

const NewPage = () => {
    return (
        <>
         <div className='containerDiv'>
                <div className='contentDiv1'>
                    <div className="textDiv">
                        <div className="textCont">
                            <div className='textCont-More'>
                                <h1>
                                    Achieve More, Stress Less
                                </h1>
                            </div>
                            <div className='textCont-Para'>
                                <p>Our app helps you stay focused by 
cutting out distractions, so you can 
achieve your goals faster and feel 
more in control of your time.
Enjoy the progress you make each
day with balanced screen time and a 
clearer sense of purpose.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <img src={assets.img5} className='imageDiv' alt="" />
                </div>
        
               
          
           
         </div>
            

             <div className='containerDiv2'>
    
              
                <div className="contentdiv">
                   <img src={assets.img5} className='image1' alt="" />
                    <div className="textDiv2 rounded-md">
                        <div className='textDiv-content'>
                            <div className="textDiv-prod">
                                 <h1>Your Ultimate Productivity Companion"</h1>
                            </div>
                            <div className="textDiv-para">
                               <p>Elevate your productivity with our all-in-one 
                                    app, combining tasks, goals, and habits in a 
                                    single, intuitive platform, insights and flexible workflows that make achieving your goals 
                                    easier and more effective.</p>
                            </div>
                        </div>
                    </div>
            </div>

              
           </div>
        
        </>
       
              
            
 
  )
}

export default NewPage
