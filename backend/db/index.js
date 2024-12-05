const mongo = require("mongoose")

mongo.connect("mongodb://localhost:27017")


const userSchema = new mongo.Schema({
    userName:{
        type:String,
        unique:true,
        trim:true,
        minLength:3,
        maxLength:30,
        lowercase:true
    },
    firstName: {
        type:String,
        trim:true,
        minLength:3,
        maxLength:30
        },
    lastName: {
        type:String,
        trim:true,
        minLength:3,
        maxLength:30
    },
    password: {
        type:String,     
        minLength:6
    }
})

const User =mongo.model('user',userSchema);

const accountSchema=new mongo.Schema({
    userId:{
        type:mongo.Schema.Types.ObjectId,
        ref:User,
        required:true
         },
    balance:{
        type:Number,
        required:true,
    }})


const Account =mongo.model('account',accountSchema);

module.exports={
    User,
    Account
}