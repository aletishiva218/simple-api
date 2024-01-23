import userModel from "../../Database/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const accessToken = process.env.ACCESS_TOKEN;

const login =async (req,res) =>{
    const user = await userModel.findOne({username:req.body.username.toLowerCase()})
    const signUser = {username:user.username,email:user.email}
    const token = jwt.sign(signUser,accessToken);
    res.cookie("token",token,{expires:new Date(Date.now()+(24*60*60*1000))})
    res.redirect("/user/dashboard")
}

export default login;