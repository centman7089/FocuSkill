// @ts-nocheck
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Services from "./components/services/Services";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import SummaryApi from './common/index.js'
import Context from './context/index.js'
import {Toaster} from "react-hot-toast"
import { useDispatch } from 'react-redux'
import { setUserDetails } from './store/userSlice.js'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoutes from "./components/Protected.jsx";



const App = () =>
{
  
  const dispatch = useDispatch()
  const fetchUserDetails = async () =>
  {
     const dataResponse = await fetch(SummaryApi.current_user.url,{
            method: SummaryApi.current_user.method,
           credentials: 'include',
            headers : {
                "content-type" : "application/json"
            },
           
     } )
    console.log(dataResponse);
    
    
    const dataApi = await dataResponse.json()
    
          if (dataApi.success) {
            dispatch(setUserDetails(dataApi.data))
          }

    // console.log("data-user",dataResponse);
    
  }
  
  useEffect( () =>
  {
    // userDetails
    fetchUserDetails()

  },[])
  return (
    < >
      <ToastContainer/>
      <Toaster />
      <Context.Provider value={{
        fetchUserDetails //user details fetch

      } }>
      
   <Navbar/>

        <div>
            
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/service" element={<Services/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
        
      {/* <Route path="*" element={<NotFound/>} /> */}
      </Routes>
    </div>
      
        <Footer />
         
        </Context.Provider>
    </>
    
  )
};

export default App;
