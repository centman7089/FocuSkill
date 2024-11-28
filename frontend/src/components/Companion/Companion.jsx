import React from "react";
import './Companion.css'
import { assets } from "../../3mtt_assets/assets";

const Companion = () => {
    return (
       <div className='companion'>
          <div className="companion-container">
              <div className="companion-image">
                <img src={assets.img5} alt="" />
              </div>
              <div className="companion-content">
                    <div className="content-text">
                        <h1>
                           Your Ultimate Productivity Companion"
                        </h1>
                        <p>Elevate your productivity with our all-in-one 
app, combining tasks, goals, and habits in a 
single, intuitive platform, insights and flexible workflows that make achieving your goals 
easier and more effective.</p>
                  </div>
              </div>
        </div>
    </div>
  )
};

export default Companion;
