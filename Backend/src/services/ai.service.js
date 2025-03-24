const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
// console.log(process.env.GOOGLE_GEMINI_KEY); debugging 

const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" }); // current model


async function generateContent(prompt){
    const result = await model.generateContent(prompt);

    return result.response.text();
}

module.exports = generateContent