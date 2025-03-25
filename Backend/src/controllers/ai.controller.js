const aiService = require("../services/ai.service");

module.exports.getReview = async (req,res)=>{
    console.log("Query params",req.query);
    console.log("Body",req.body);
    
    
    const code  = req.body.code;

    if(!code){
        return res.status(400).send("Prompt is required");
    }
    try{
    const response = await aiService(code);
    res.send(response);
    }catch(error){
        console.log("error generating response",error);
        res.status(500).send("Internal server error")
        
    }
}