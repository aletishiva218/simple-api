import userModel from "../../Database/userModel.js";

const registerMiddleware = {
    isLoggedIn : (req,res,next) => {
        const token = req.cookies.token;
        if(token) return res.redirect("/user/dashboard");
        next();
    },
    exists : async (req,res,next) => {
        const usernameUser = await userModel.findOne({username:req.body.username.toLowerCase().trim()})
        const emailUser = await userModel.findOne({email:req.body.email.toLowerCase().trim()})
        if(usernameUser || emailUser) return res.render("register",{exists:true})
        next();
    }
}

export default registerMiddleware;