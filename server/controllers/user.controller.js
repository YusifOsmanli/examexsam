const {userModel}=require ('../models/user.model')


const userController={
    getAll : async (req,res)=>{
        try{
            const target= await userModel.find()
            res.send(target)
        }catch(error){
            res.send('error')
        }
    },
    getById : async (req,res)=>{
        try{
            const {id}=req.params
            const orxan=await userModel.findById(id)
            res.send(orxan)
        }catch(error){
            res.send('error')
        }
    },
    post : async (req,res)=>{
        try{
            const{name,desc,price,image}=req.body
            const newUser= new userModel({name,desc,price,image})
            await newUser.save()
            res.send('yarandi')
        }catch(error){
            res.send('error')
        }
    },
    delete : async (req,res)=>{
        try{
            const {id}=req.params
            await userModel.findByIdAndDelete(id)
            res.send('silindi')
        }catch(error){
            res.send('error')
        }
    }
}


module.exports={userController}