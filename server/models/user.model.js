const mongoose=require('mongoose')


const userModel=mongoose.model ('port', new mongoose.Schema({
    name:String,
    desc:String,
    price:Number,
    image:String
}))


module.exports={userModel}