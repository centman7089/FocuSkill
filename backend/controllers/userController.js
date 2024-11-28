// @ts-nocheck

import userModel from "../models/userModel.js"
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";
import productModel from "../models/productModel.js";
import UploadProductPermission from "../helpers/permission.js";
// import validator from "validator";


// const createToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET);
// };

const signup = async ( req, res ) =>
{
   
   try{
        const {name,  email, password} = req.body

        const user = await userModel.findOne({email})

      

        if(user){
            throw new Error("Already user exits.")
     }
      if (!email || !password || !name) {
        return res.json({success:false,message:"please provide this details"})
      }

        // if(!email){
        //    throw new Error("Please provide email")
        // }
        // if(!password){
        //     throw new Error("Please provide password")
        // }
        // if(!name){
        //     throw new Error("Please provide name")
        // }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if(!hashPassword){
            throw new Error("Something is wrong")
        }

        const payload = {
            ...req.body,
            role : "GENERAL",
            password : hashPassword
        }

        const userData = new userModel(payload)
        const saveUser = await userData.save()

        return res.status(201).json({
            data : saveUser,
            success : true,
            error : false,
            message : "User created Successfully!"
        })


    }catch(err){
      
       return  res.status(400).json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
    }

}
const signin = async( req, res ) => {
     try{
        const { email , password} = req.body

        if(!email){
            throw new Error("Please provide email")
        }
        if(!password){
             throw new Error("Please provide password")
        }

        const user = await userModel.findOne({email})

       if(!user){
            throw new Error("User not found")
       }

       const checkPassword = await bcrypt.compare(password,user.password)

       

       if(checkPassword){
        const tokenData = {
            _id : user._id,
            email : user.email,
        }
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: 24 * 60 * 60 * 1000 });

        const tokenOption = {
            httpOnly : true,
            secure : true
        }

        res.cookie("token",token,tokenOption).status(200).json({
            message : "Login successfully",
            token : token,
            success : true,
            error : false
        })

       }else{
         throw new Error("Please check Password")
       }







    }catch(err){
        res.json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
    }


}
const forget_password = async( req, res ) => {
   
}
const userDetails = async ( req, res ) => {
     try{
       
        const user = await userModel.findById(req.body.userId)

        res.status(200).json({
            data : user,
            error : false,
            success : true,
            message : "User details"
        } )
          console.log("userId",req.body.userId)

        console.log("user",user)

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }

}
const reset = async( req, res ) => {
   
}
const updateUser = async( req, res ) => {
    try
    {
       const sessionUser = req.userId

       const { userId,email,name,role } = req.body
       
       const payload = {
           ...(email && {email : email} ),
           ...(name && {name : name} ),
           ...(role && {role : role} )
        //    ...(userId && {userId : userId} )
       }


        const user = await userModel.findById( sessionUser )
        
        console.log("user role",user?.role);
        

       const updateUser = await userModel.findByIdAndUpdate( userId,payload )
       
       if (updateUser) {
        
       }

       return res.status( 200 ).json( {
           date:updateUser,
           message: "User Updated Successfully",
           error : false,
            success : true,
       })

   } catch (err) {
      res.json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
   }
}
const allUsers = async( req, res ) => {
   try {
       console.log( "userId all user", req.body.userId );
       const allUsers = await userModel.find()
       
       return res.status( 200 ).json( {
           
           message: "All users",
           data: allUsers,
           success: true,
           error:false
       })
      
   } catch (err) {
      res.json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
   }
}
const logout = async( req, res ) => {
     try{
        res.clearCookie("token")

        res.json({
            message : "Logged out successfully",
            error : false,
            success : true,
            data : []
        })
    }catch(err){
        res.json({
            message : err.message || err  ,
            error : true,
            success : false,
        })
    }


}




export
{
    signin,
    signup,
    forget_password,
    reset, logout, userDetails, allUsers,
    updateUser
}