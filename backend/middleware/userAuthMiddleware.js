const JWT_SECRETS =require ("../config");
const jwt=require("jsonwebtoken")


 const userAuthMiddleware=(req,res,next)=>{
    const token =req.headers.authorization;
   
    console.log(req.body)
    if(!token || !token.startsWith("Bearer ")){
        return res.status(403).json({
            msg: "no token or token expired"

        })
    }
    const tokenSplit=token.split(" ")[1];
 
    try{
        const user=jwt.verify(tokenSplit,JWT_SECRETS);

       
        if(user.userId){
            req.userId=user.userId
            next();
        
        }else{
 
            return res.status(403).json({msg:"jwt userid error"})
        }
        
    }
    catch(err){

        console.log(err);
        return res.status(411).json({

            msg:"token error"
        })
    }
    
}

module.exports={userAuthMiddleware}