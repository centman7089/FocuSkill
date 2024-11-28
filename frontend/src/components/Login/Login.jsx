// @ts-nocheck
import React, { useContext, useState } from 'react'
import { assets } from '../../3mtt_assets/assets'
import './Login.css'

import { Link, useNavigate } from 'react-router-dom';


import { toast } from 'react-toastify';
import Context from '../../context';
import SummaryApi from '../../common';


const Login = () =>
{
  
const [showPassword,setShowPassword] = useState(false)
    const [data,setData] = useState({
        email : "",
        password : ""
    })
    const navigate = useNavigate()
    const {fetchUserDetails} = useContext( Context )
   
    
   

    const handleOnChange = (e) =>{
        const { name , value } = e.target

        setData((preve)=>{
            return{
                ...preve,
                [name] : value
            }
        })
    }


    const handleSubmit = async(e) => {
        e.preventDefault()

    

         const dataResponse = await fetch(SummaryApi.signIn.url,{
             method: SummaryApi.signIn.method,
             credentials:'include',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
          })
    
        const dataApi = await dataResponse.json()
        console.log(dataResponse);
        

          if(dataApi.success){
              toast.success( dataApi.message )
              navigate( "/" )
              fetchUserDetails()
          }

          if(dataApi.error){
            toast.error(dataApi.message)
            // console.error(dataApi.message)
          }
    
     


    }

    console.log("data login",data)

  return (
    <div className='login'>
      <div className="login-container">
              <div className="login-image">
                 <div className='logo'>
                <Link className='logo' to='/'>
                <img src={assets.focus} alt="" />
                <p>FocuSkill</p>
                </Link>
                      <span>"Focus Better, Achieve More."</span>
              </div>
          <img src={assets.phone3} alt="" />
        </div>
        <form onSubmit={handleSubmit} className='login-right'>
          <div className="login-title">
            <h1>Login</h1>
           
            
          </div>
         
          
          
          <input type="email" name='email'
            value={data.email}
                                   
            onChange={handleOnChange}
            placeholder='Enter your email' />
          <input type="password"  value={data.password}
                                    name='password' 
                                    onChange={handleOnChange} placeholder='Enter your password' />
          
          {/* <p className='password'> <Link to={'/forgot-password'}>forgot password? </Link></p> */}
                  
          <button type='submit' className='login-submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
