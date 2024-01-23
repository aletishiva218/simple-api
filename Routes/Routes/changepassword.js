import userModel from "../../Database/userModel.js";
import bcrypt from "bcrypt";

const changePassword = (req,res) =>{
    bcrypt.hash(req.body.password1,10).then(async hashedPassword => {
        await userModel.updateOne({username:req.body.username},{$set:{password:hashedPassword}})
        res.redirect("/user/login")
    })
}

export default changePassword;