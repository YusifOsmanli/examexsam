const express = require('express')
const app = express()
const cors=require('cors')
const mongoose=require('mongoose')

const router=require('./routes/user.routes')

app.use(cors())
app.use(express.json())


mongoose.connect('mongodb+srv://tu6xkjyle:Rassel73@cluster0.d2pfwsr.mongodb.net/').then(res=>{
    console.log('db connected')
})

app.use('/ports',router)
app.listen(8081,()=>{
    console.log('port connected')
})