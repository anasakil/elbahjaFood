const express = require("express")
const app = express()
const connectDb = require("./config/db")
require("dotenv").config()



const PORT = process.env.PORT || 2500
connectDb();

app.listen(PORT,()=>{
    console.log("server is running ....");
})