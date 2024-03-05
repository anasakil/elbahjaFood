const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () =>{
    await mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("connected");
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports= connectDb