// @ts-nocheck
import React, { useState } from 'react'
import { assets } from '../../3mtt_assets/assets'
import './SignUp.css'

import { Link, useNavigate } from 'react-router-dom';


import {toast} from 'react-toastify'
import SummaryApi from '../../common';

const SignUp = () =>
{
  
    const [showPassword,setShowPassword] = useState(false)
  const [showConfirmPassword,setShowConfirmPassword] = useState(false)
  const [data,setData] = useState({
      email : "",
      password : "",
      name : "",
      confirmPassword : "",
      profilePic : "",
  })
  const navigate = useNavigate()

  const handleOnChange = (e) =>{
      const { name , value } = e.target

      setData((preve)=>{
          return{
              ...preve,
              [name] : value
          }
      })
  }

  const handleUploadPic = async(e) =>{
    const file = e.target.files[0]
    
    const imagePic = await ImageToBase64(file)
    
    setData((preve)=>{
      return{
        ...preve,
        profilePic : imagePic
      }
    })

  }


  const handleSubmit = async(e) =>{
      e.preventDefault()

      if(data.password === data.confirmPassword){

        const dataResponse = await fetch(SummaryApi.signUP.url,{
            method: SummaryApi.signUP.method,
            credentials:'include',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
          })
    
          const dataApi = await dataResponse.json()

          if(dataApi.success){
            toast.success(dataApi.message)
            navigate("/login")
          }

          if(dataApi.error){
             toast.error(dataApi.message)
            // console.error(dataApi.message)
          }
    
      }else{
        toast.error("Please check password and confirm password")
      }

  }
  return (
    <div className='signup'>
      <div className="signup-container">
         <div className="signup-image">
                 <div className='logo'>
                <Link className='logo' to='/'>
                <img src={assets.focus} alt="" />
                <p>FocuSkill</p>
                      </Link>
                      <span>"Focus Better, Achieve More."</span>
              </div>
          <img src={assets.phone3} alt="" />
        </div>
        <form onSubmit={handleSubmit} className='signup-right'>
          <div className="signup-title">
            <h1>Signup</h1>
            <p>feel free to connect with us</p>
          </div>
         
          <input  type='text' 
                                      
                                      name='name'
                                      value={data.name}
                                      onChange={handleOnChange}
                                      required placeholder='Enter your name' />
          
          <input    type='email' 
                                 
                                    name='email'
                                    value={data.email}
                                    onChange={handleOnChange}
                                    required placeholder='Enter your email' />
          <input  type={showPassword ? "text" : "password"} 
                                   
                                    value={data.password}
                                    name='password' 
                                    onChange={handleOnChange}
                                    required placeholder='Enter your password' />
          <input  type={showConfirmPassword ? "text" : "password"} 
                                    
                                    value={data.confirmPassword}
                                    name='confirmPassword' 
                                    onChange={handleOnChange}
                                    required placeholder='Enter confirm password' />
         
            <div className='check'>
            <input className='input-check' type="checkbox" />
            <p>I agree to the  <a href="">Terms and Condition</a></p>
          </div>
          <button type='submit' className='signup-submit'>Sign Up</button>
          <p className='account'>Already have an account?  <Link to={'/login'}>Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default SignUp
