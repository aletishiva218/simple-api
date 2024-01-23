import bcrypt from "bcrypt";
import userModel from "../../Database/userModel.js";
const loginMiddleware = {
    isLoggedIn : (req,res,next) => {
        const token = req.cookies.token;
        if(token) return res.redirect("/user/dashboard");
        next();
    },
    notexists : async (req,res,next) => {
        const usernameUser = await userModel.findOne({username:req.body.username.toLowerCase().trim()})
        if(!usernameUser) return res.render("login",{notexists:true})
        bcrypt.compare(req.body.password.trim(),usernameUser.password,(err,result)=>{
            if(err) return res.status(400).json({error:err})
            if(!result) return res.render("login",{notexists:true})
            next();
        })
    }
}

export default loginMiddleware;