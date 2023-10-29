import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
    },
    password:{
        type:String,
        require:[true,"password is required"]
    },
    isVerified:{
        type:String,
        default:false
    }
})

const User = mongoose.models.users || mongoose.model("user",userSchema)

export default User;