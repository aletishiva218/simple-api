import userModel from "../../Database/userModel.js";

const forgotPasswordMiddleware = {
    isLoggedIn:(req,res,next) =>{
        const token = req.cookies.token;
        if(token) return res.redirect("/user/dashboard");
        next();
    },
    notexists : async (req,res,next) => {
        const usernameUser = await userModel.findOne({username:req.body.username.toLowerCase().trim()})
        if(!usernameUser) return res.render("forgotpassword",{notexists:true})
        next();
    }
}

export default forgotPasswordMiddleware;