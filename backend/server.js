import express from 'express'
import bodyParser from 'body-parser';
import cors from "cors";
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import userRouter from './routes/userRoute.js';
import connectDB from './db/db.js';

dotenv.config();








//app congfig
const app = express()
const port = process.env.PORT || 5000;

//middleware

//middleware
app.use(cors({origin:["http://localhost:5173","http://localhost:5174","https://focuskill.onrender.com"],credentials:true}))
app.use( express.json() )
app.use(cookieParser())
// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));




//api endpoint
app.use("/api/users",userRouter )


//to show our images in the frontend



// const port = process.env.PORT || 5000;


//db
connectDB();








app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
    
})