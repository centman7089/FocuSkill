// @ts-nocheck
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


import React, { useContext, useState } from 'react'

import './Navbar.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'

import { assets } from '../../3mtt_assets/assets';

import {useDispatch, useSelector} from 'react-redux'

import { Button } from 'bootstrap'


import SummaryApi from '../../common';
import { setUserDetails } from '../../store/userSlice';
import Context from '../../context';
import {toast} from 'react-toastify'



const Navbar = () => {

   const user = useSelector( state => state?.user?.user )
  const context = useContext( Context )
  const dispatch = useDispatch()
  const navigate = useNavigate()
    const [menu, setMenu] = useState("home")
  // console.log( "user header", user );



  const handleLogout = async () =>
  {
    const fetchData = await fetch( SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: 'include'
    } )
    
    const data = await fetchData.json()

    if (data.success) {
      toast.success( data.message )
      dispatch( setUserDetails( null ) )
      navigate("/login")
    }
    if (data.error) {
      toast.error(data.error)
    }
  }

  return (
    <div className="navbar">
      <div className='logo'>
        <Link className='logo1' to='/'>
          <img src={assets.focus} alt="" />
          <p>FocuSkill</p>
        </Link>
      </div>
     
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <Link
          to={'/service'}
          href="#explore-menu"
          onClick={() => setMenu("services")}
          className={menu === "services" ? "active" : ""}
        >
          Services{" "}
        </Link>
        <Link
          to={'/about'}
          href="#app-download"
          onClick={() => setMenu("about")}
          className={menu === "about" ? "active" : ""}
        >
          About
        </Link>
        <Link to='/contact'
          
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact
        </Link>

        
      </ul>

      <div>
        {
          user?._id ? (
            <div className='flex'>
              <h3>Welcome {user?.name}</h3>
               <button onClick={handleLogout}>Logout</button>
           </div>
          ): (
              <div class="extra">
            <Link to={'/login'}>Log in</Link>
            <button><Link to={'/signup'}>Sign up</Link></button>
        </div>
          )
        }
      </div>
    </div>
   
  );
}

export default Navbar
