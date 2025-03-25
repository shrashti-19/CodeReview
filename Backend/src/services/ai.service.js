const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
// console.log(process.env.GOOGLE_GEMINI_KEY); debugging 

const model = genAI.getGenerativeModel({ 
    model: "gemini-2.0-flash" ,
    systemInstruction : `
     
    You are an expert code reviewer. Analyze the given code, detect inefficiencies, 
    bugs, and bad practices, and suggest improvements.

    Focus on performance, readability, and maintainability. Provide concise, 
    actionable feedback with optimized solutions and best practices.

    Keep responses precise, solution-driven, and easy to implement.
    `

}); // current model


async function generateContent(prompt){
    const result = await model.generateContent(prompt);

    return result.response.text();
}

module.exports = generateContent