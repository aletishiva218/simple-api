import mongoose from "./config.js";
const Schema = new mongoose.Schema({
    username:String,
    email:String,
    password:String
});

const userModel = new mongoose.model("user",Schema);

export default userModel;