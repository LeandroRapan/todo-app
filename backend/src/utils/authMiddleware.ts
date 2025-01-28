import  jwt  from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { envConfig } from "../config/env";

interface CustomRequest extends Request {
    user?:any;
}
export const authenticateJWT= (
    req: CustomRequest,
    res: Response,
    next: NextFunction
)=>{
    const authHeader= req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ 
          message: 'No token provided' 
        });
      }
    const token= authHeader.split(' ')[1];
    if(!token){
        return res.status(401).json({
            message:'not token provided'
        })
    }
    try {
        const decoded = jwt.verify(token, envConfig.jwtSecret);
    req.user = decoded;
    next();
    } catch (error) {
        res.status(403).json({ message: 'Invalid token' }); 
    }
}