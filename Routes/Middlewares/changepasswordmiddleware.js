const changePasswordMiddleware = {
    isLoggedIn:(req,res,next) =>{
        const token = req.cookies.token;
        if(token) return res.redirect("/user/dashboard");
        next();
    },
    passwordCheck:(req,res,next) =>{
        const newPassword = req.body.password1.toLowerCase().trim();
        const confirmPassword = req.body.password2.toLowerCase().trim();
         if(newPassword!=confirmPassword) return res.render("forgotpassword",{passwordNotMatch:true})
            next();
        }
}

export default changePasswordMiddleware;