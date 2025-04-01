const aiService = require("../services/ai.service");

module.exports.getReview = async (req,res)=>{
    console.log("Query params",req.query);
    console.log("Body",req.body);
    
    
    const {code,language, reviewLevel}  = req.body;

    if(!code){
        return res.status(400).send("Prompt is required");
    }
    if(!language){
        return res.status(400).send("Language is required");
    }
    if(!reviewLevel){
        return res.status(400).send("Review level is require");
    }
    try{
    const response = await aiService(code,language,reviewLevel);
    res.send(response);
    }catch(error){
        console.log("error generating response",error);
        res.status(500).send("Internal server error")
        
    }
}