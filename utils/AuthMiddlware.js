import jwt from "jsonwebtoken";
import secretKey from "../config/jwtconfig.js";

function AuthanticateToken(req,res,next) {
    const authToken = req.header("Authorization")
    if(!authToken) {
        return res.status(401).json({"message":"Authorization missing"})
    }
    const [bearer,token] = authToken.split("")
    if (bearer !="bearer" || !token){
        return res.status(401).json({"message":"invalid token formate"})
    }

    jwt.verify(token,secretKey,(err,user)=>{
        if(err){
            return res.status(401).json({"message":"invalid token"})
        }
        req.user = user
        next()
    })
}

export default AuthanticateToken