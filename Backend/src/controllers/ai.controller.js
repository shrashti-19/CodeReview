const aiService = require("../services/ai.service");

module.exports.getResponse = async (req,res)=>{
    console.log("Query params",req.query);
    console.log("Body",req.body);
    
    
    const prompt = req.query.prompt || req.body.prompt;

    if(!prompt){
        return res.status(400).send("Prompt is required");
    }
    try{
    const response = await aiService(prompt);
    res.send(response);
    }catch(error){
        console.log("error generating response",error);
        res.status(500).send("Internal server error")
        
    }
}