"use strict"

const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");
const markRouter = require("./router/test.router");

// mongodb connection
mongoose.connect("mongodb://localhost:27017/test").then(()=>{
    console.log("Mongo DB connected successfully")
}).catch((err)=>{
    console.log(err)
});


// health check api
app.get("/healthCheck", async(req, res)=>{
    try {
        res.status(200).json({"status": "success", "message": "Server running perfectly"})
    } catch (error) {
        res.status(500).json({"status": "failure", "message": "Something went wrong"})
    }
});
app.use(express.json());
app.use("/api/v1/mark/", markRouter);

// server creation
app.listen(port, (err)=>{
    if(!err){
        console.log(`listing port http://127.0.0.1:${port}`)
    }
})