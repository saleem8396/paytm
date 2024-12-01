const express=require('express')
const router=express.Router();
const {User, Account}=require("../db/index")
const JWT_SECRETS=require('../config')
const jwt=require("jsonwebtoken")
const {userBodySchema,userBodysigninSchema,userDataChangeSchema, stringSchema} =require("../zodSchema/userSchema");
const { userAuthMiddleware } = require('../middleware/userAuthMiddleware');

router.use(express.json())


router.post("/signup",async(req,res)=>{

    const {success}=userBodySchema.safeParse(req.body);
    
    if(!success){
        return res.status(411).json({
            msg:"the input is invalid"
        })
    }

    const user=await User.findOne({
        userName:req.body.userName
    })

   
    if(user){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }
    const newUser=await User.create({
        userName:req.body.userName,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        password:req.body.password

    })

    const userId=newUser._id;

    await Account.create({
        userId,
        balance:1+Math.random()*100000
    })

    const token = jwt.sign({userId},JWT_SECRETS);

    return res.status(200).json({
        message: "User created successfully",
        token: token
    })
})

router.post("/signin",async (req,res)=>{
    const {success}=userBodysigninSchema.safeParse(req.body);

    if(!success){
        return res.status(411).json({
            message: "Error while logging in"
        })
    }

    const existingUser=await User.findOne({
        userName:req.body.userName,
        password:req.body.password
    })

   
    if(existingUser){
        const token= jwt.sign({
            userId:existingUser._id
        },JWT_SECRETS)

        return res.status(200).json({
            token
        })
    }

     res.status(411).json({
        message: "Error while logging in"
    })

})

router.put("/",userAuthMiddleware,async (req,res)=>{

    console.log(req.body)
    const {success}=userDataChangeSchema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            msg:"invalid data"
        })
    }
    console.log(req.userId)
    const updatedUser=await User.updateOne({
        _id:req.userId

    },req.body)

    console.log(updatedUser);

    if(updatedUser.acknowledged==false || updatedUser.modifiedCount==0){
        return res.status(403).json({
            msg:"data not updated"
        })
    }
    return res.json({
        msg:"update successful"
    })
})

router.get("/bulk",async(req,res)=>{
    const filter=req.query.filter|| "";
    const {success}=stringSchema.safeParse(filter);
    if(!success){
        return res.status(411).json({
            msg:"invalid query parameter"
        })

    }
    const users=await User.find({
        $or:[{
            firstName:{
            "$regex":filter,
            "$options": "i"
        }},{
            lastName:{
                "$regex": `^${filter}`,
                "$options": "i"
            }
        }]
    })

    if(users.length==0){
        return res.json({
            msg:"no user found"
        })
    }

    res.json({
        users:users.map((user)=>{
            return {
                firstName:user.firstName,
                lastName:user.lastName,
                userName:user.userName
            }
        })
    })

})
module.exports=router;