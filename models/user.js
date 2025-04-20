/// Schema :- Schema is a collection of properties of a defined item .
// for example:- the user properties are name , email,contact number.

const mongoose =require('mongoose')

const userSchema =new mongoose.Schema({
    username:String,
    email:String,
    password:String,
})

const userModel= mongoose.model('user',userSchema)
module.exports=userModel
