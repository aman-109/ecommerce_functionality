
require("dotenv").config()
const mongoose=require("mongoose")

const connect=()=>{
    mongoose.set('strictQuery', true)
    return mongoose.connect(process.env.MONGODB_URL,{ 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
        },(err) => {
        if (err) {
        console.log("error in connection");
        } else {
        console.log("mongodb is connected");
        }})
}


module.exports=connect