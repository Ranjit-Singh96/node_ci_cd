const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("Welcome to Nodejs server with ci/cd pipeline auto deployment!")
})

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})