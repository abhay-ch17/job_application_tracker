import userModel from "../models/AuthModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateToken } from "../utils/createToken.js";

export const createUser = async (req, res)=>{
    const { Username, Email, Password, ConfirmPassword } = req.body;
    const saltRound = 10;
    try {
        const findUser = await userModel.findOne({Username});
        const findUserEmail = await userModel.findOne({Email});
        if(findUser || findUserEmail){
            return res.status(409).json({error:"user already exist"});
        }else{
            if(Password!=ConfirmPassword){
                return res.status(403).json({message:"confirm password not matched"});
            }else{
                bcrypt.hash(ConfirmPassword, saltRound, async(err, hash)=>{
                    if(err){
                        return res.status(500).json({message:"Internal server error"});
                    }else{
                        const newUser = await userModel.create({Username, Email, Password:hash});
                        if(!newUser){
                            res.status(403).json({message:"access denied"});
                        }else{
                            generateToken(newUser, res);
                        }
                    }
                })
            }
        }
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}



export const loginUser = async (req, res)=>{
    const { Email, Password } = req.body;
    try {
        const user = await userModel.findOne({Email});
        if(!user){
            return res.status(404).json({message:"user not found"});
        }else{
            bcrypt.compare(Password, user.Password, (err, result)=>{
                if(!result) return res.status(403).json({message: "invalid creadintials"});
                generateToken(user, res);
            })
        }
    } catch (error) {
        res.status(404).json({message:"something went wrong"});
    }
}



export const logout = async (req, res)=>{
     const cookieOption = {
            httpOnly:true,
            secure:true,
            sameSite:'lax',
            path:"/"
        };

    try {
        req.cookies?res.clearCookie("authToken"):res.status(404).json({message:"no cookie found"});
        return res.status(200).json({message:"logged out successfully"});
    } catch (error) {
        return res.status(404).json({message:error});
    }
}



export const getMe = async (req, res)=>{
    const { id } = req.user;
    try {
        const getUser = await userModel.findById(id).select("-Password");
        if(!getUser){
            return res.status(403).json({error:"unauthorised access"});
        }
        return res.status(200).json(getUser);
    } catch (error) {
        res.status(404).json({error:error.message});
    }
}