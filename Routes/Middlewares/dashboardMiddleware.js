const dashboardMiddleware = {
    isLoggedIn: (req,res,next)=>{
        const token = req.cookies.token;
        if(!token) return res.redirect("/user/login");
        next();
    }
}

export default dashboardMiddleware;