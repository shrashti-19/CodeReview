const express = require('express');




const app = express(); //server create krta hai
//test route creation

app.get('/',(req,res)=>{
    res.send("Hello world");
})
module.exports = app;