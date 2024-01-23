import bcrypt from "bcrypt";
import userModel from "../../Database/userModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const accessToken = process.env.ACCESS_TOKEN;

const register = (req,res) =>{
    bcrypt.hash(req.body.password,10).then(async hashedPassword => {
        const newUser = {username:req.body.username.toLowerCase(),email:req.body.email,password:hashedPassword};
        await userModel.create(newUser);
        const signUser = {username:newUser.username,email:newUser.email}
        const token = jwt.sign(signUser,accessToken);
        res.cookie("token",token,{expires:new Date(Date.now()+(24*60*60*1000))})
        res.status(200).redirect("/user/dashboard");
    })
}

export default register;