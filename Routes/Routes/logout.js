const logout = (req,res) => {
    res.clearCookie("token");
    res.redirect("/user/login");
}

export default logout;