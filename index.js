import express from "express";
import dotenv from "dotenv";

import register from "./Routes/Routes/register.js";
import login from "./Routes/Routes/login.js";
import forgotPassword from "./Routes/Routes/forgotPassword.js";
import changePassword from "./Routes/Routes/changepassword.js";
import dashboard from "./Routes/Routes/dashboard.js";
import logout from "./Routes/Routes/logout.js";

import registerMiddleware from "./Routes/Middlewares/registerMiddleware.js";
import loginMiddleware from "./Routes/Middlewares/loginMiddleware.js";
import forgotPasswordMiddleware from "./Routes/Middlewares/forgotpasswordmiddleware.js";
import changePasswordMiddleware from "./Routes/Middlewares/changepasswordmiddleware.js";
import dashboardMiddleware from "./Routes/Middlewares/dashboardMiddleware.js";

import cookieParser from "cookie-parser";


dotenv.config();

const port = process.env.PORT;

const app = express();
app.set("view engine","ejs");
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))

app.get("/user/register",registerMiddleware.isLoggedIn,(req,res)=>{res.status(200).render("register")})
app.get("/user/login",loginMiddleware.isLoggedIn,(req,res)=>{res.status(200).render("login")})
app.get("/user/forgotpassword",forgotPasswordMiddleware.isLoggedIn,(req,res)=>{res.status(200).render("forgotpassword")})
app.get("/user/changepassword",changePasswordMiddleware.isLoggedIn,(req,res)=>{res.status(200).redirect("/user/forgotpassword")})

app.get("/user/dashboard",dashboardMiddleware.isLoggedIn,dashboard)

app.post("/user/register",registerMiddleware.exists,register)
app.post("/user/login",loginMiddleware.notexists,login)
app.post("/user/forgotpassword",forgotPasswordMiddleware.notexists,forgotPassword)
app.post("/user/changepassword",changePasswordMiddleware.passwordCheck,changePassword)
app.post("/user/logout",logout)


app.listen(port,()=>{console.log(`Server is started at port ${port}`)})