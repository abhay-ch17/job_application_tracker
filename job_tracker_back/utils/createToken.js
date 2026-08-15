import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

export const generateToken = (user, res)=>{
    try {
        const payload = { username:user.Username, email:user.Email, id:user._id };
        const secretKey = process.env.SECRET_KEY;
        const Token = jwt.sign(payload, secretKey, {expiresIn:'1h'});

        const cookieOption = {
            httpOnly:true,
            secure:true,
            sameSite:'lax',
            maxAge:3600000,
            path:"/"
        };

        res.status(200).cookie('authToken', Token, cookieOption).json({message:"signup successfull", userData:{username:user.Username, Email:user.Email, id:user._id}});
    } catch (error) {
        res.status(403).json({message:"Message denied"});
    }
}
