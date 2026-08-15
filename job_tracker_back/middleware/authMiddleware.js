import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const authMiddleware = async(req, res, next)=>{
    const token = req.cookies.authToken;
    try {
        if(!token){
            return res.status(401).json({message:"unauthorised access, Failed"});
        }       
            jwt.verify(token, process.env.SECRET_KEY, async(err, decode)=>{
                if(err){
                    return res.status(403).json({message:err});
                }
                req.user = decode;
                next();
            });
      
    } catch (error) {
        return res.status(404).json({message:error});
    }
}