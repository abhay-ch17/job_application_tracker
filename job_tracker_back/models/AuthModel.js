import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Username:{
        type:String, unique:true
    },
    Email:{
        type:String, unique:true
    },
    Password:String
},
{
    timestamps:true
});

const userModel = mongoose.model("Auth", userSchema);
export default userModel