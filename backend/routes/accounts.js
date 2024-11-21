const express =require("express");
const { userAuthMiddleware } = require("../middleware/userAuthMiddleware");
const { Account } = require("../db");
const { transferBodySchema } = require("../zodSchema/userSchema");
const  mongo  = require("mongoose");
const router=express.Router();
router.use(express.json())


router.get("/balance",userAuthMiddleware,async(req,res)=>{

    const account =await Account.findOne({
        userId:req.userId
    })
    if(account){
        return res.json({
            balance:account.balance
        })
    }

    return res.json({
        msg:"something went wrong while fetching the balance"
    })

})

router.post("/transfer",userAuthMiddleware,async(req,res)=>{
    
    const{success}=transferBodySchema.safeParse(req.body);
    console.log(req.body)
    if(!success){
        return res.status(411).json({
            msg:"invalid transfer data"
        })
    }

    
    
     
    const {to,amount}=req.body;

    const userBalance=await Account.findOne({

        userId:req.userId
    })

    if(!userBalance||userBalance.balance<amount){
       
       
        return res.json({
            msg:" insufficent balance"
        })
    }

    const toAccount=await Account.findOne({
        userId:to
    })

    if(!toAccount){
        
       
        return res.json({
            msg:"receiver does not exist"
        })
    }

    await Account.updateOne({userId:req.userId},{$inc:{balance:-amount} })
    await Account.updateOne({userId:to},{$inc:{balance:amount}})
    
    res.json({
        msg:"transaction successful",
        
        "currentBalance": userBalance.balance-amount
    })

    

})





module.exports=router