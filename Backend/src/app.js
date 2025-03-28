const express = require('express');
const aiRoutes = require("./routes/ai.route")
const cors = require('cors');

const app = express(); //server create krta hai
app.use(cors());
//test route creation
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello world");
})

app.use('/ai',aiRoutes);

module.exports = app;