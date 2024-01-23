import userModel from "../../Database/userModel.js";

const forgotPassword =async (req,res) =>{
    res.render("forgotpassword",{isChange:true,username:req.body.username.toLowerCase().trim()})
}

export default forgotPassword;