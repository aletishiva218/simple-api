import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const accessToken = process.env.ACCESS_TOKEN;

const dashboard =async  (req,res) =>{
jwt.verify(req.cookies.token,accessToken,(error,registeredUser)=>{
    const user = {username:registeredUser.username,email:registeredUser.email};
    res.render("dashboard",{user})
})
}

export default dashboard;