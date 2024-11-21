const express = require("express");
const router = require("./routes/index");
const cors =require("cors")
const jwt = require("jsonwebtoken")

const app= express();

app.use("/api/v1",router);
app.use(express.json())
app.use(cors())

app.listen(3000,()=>{
    console.log("listening on port 3000")
})
