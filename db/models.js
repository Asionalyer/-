const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/qiuzhizhaopin')

const conn = mongoose.connection

conn.on('connected',()=>{
    console.log('db connect success!')
})
mongoose.connection.on("error",function(){
    console.log("MongoDB connected fail.")
})

const userSchema = mongoose.Schema({
    username:{type:String, required: true},
    password:{type:String, required: true},
    userType:{type:String, required: true},
    header:{type:String},
    post:{type:String},
    info:{type:String},
    company:{type:String},
    salary:{type:String}
})
const chatSchema = mongoose.Schema({
    from:{type:String, required: true},
    to:{type:String, required: true},
    chat_id:{type:String, required: true},
    content:{type:String,require: true},
    read:{type:Boolean,default: false},
    create_time:{type:Number}
})

const UserModel = mongoose.model('user',userSchema)
const ChatModel = mongoose.model('chat',chatSchema)

exports.UserModel=UserModel
exports.ChatModel=ChatModel
