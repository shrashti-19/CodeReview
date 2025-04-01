// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
// // console.log(process.env.GOOGLE_GEMINI_KEY); debugging 

// const model = genAI.getGenerativeModel({ 
//     model: "gemini-2.0-flash" ,
//     systemInstruction : `
     
//     You are an expert code reviewer. Analyze the given code, detect inefficiencies, 
//     bugs, and bad practices, and suggest improvements.

//     Focus on performance, readability, and maintainability. Provide concise, 
//     actionable feedback with optimized solutions and best practices.

//     Keep responses precise, solution-driven, and easy to implement.
//     `

// }); // current model


// async function generateContent(prompt){
//     const result = await model.generateContent(prompt);

//     return result.response.text();
// }

// module.exports = generateContent

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

async function generateContent(prompt) {
    const result = await genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
        systemInstruction: prompt,  // Use the prompt dynamically
    }).generateContent(prompt);

    return result.response.text();
}

module.exports = async (code, language, reviewLevel) => {
    // Define a different prompt for each language
    let prompt = '';

    switch (language) {
        case 'javascript':
            prompt = `
                You are an expert code reviewer for JavaScript. Analyze the given JavaScript code,
                detect inefficiencies, bugs, and bad practices, and suggest improvements.
                Focus on performance, readability, and maintainability. Provide concise, actionable feedback
                with optimized solutions and best practices. Keep responses precise and easy to implement.
            `;
            break;
        case 'python':
            prompt = `
                You are an expert code reviewer for Python. Analyze the given Python code,
                detect inefficiencies, bugs, and bad practices, and suggest improvements.
                Focus on performance, readability, and maintainability. Provide concise, actionable feedback
                with optimized solutions and best practices. Keep responses precise and easy to implement.
            `;
            break;
        case 'java':
            prompt = `
                You are an expert code reviewer for Java. Analyze the given Java code,
                detect inefficiencies, bugs, and bad practices, and suggest improvements.
                Focus on performance, readability, and maintainability. Provide concise, actionable feedback
                with optimized solutions and best practices. Keep responses precise and easy to implement.
            `;
            break;
        // Add more cases for other languages if needed
        default:
            prompt = `
                You are an expert code reviewer. Analyze the given code in ${language},
                detect inefficiencies, bugs, and bad practices, and suggest improvements.
                Focus on performance, readability, and maintainability. Provide concise, actionable feedback
                with optimized solutions and best practices. Keep responses precise and easy to implement.
            `;
    }
    if(reviewLevel === 'light'){
        prompt+=`Focus on major inefficiences, bugs, and issues. Produce high-level suggestions.`;
    }else if(reviewLevel === 'heavy'){
        prompt+= `Focus on detailed analysis, including performance optimization, readability, maintainability, and best practices
        . Provide actionable feedback with optimized solutions.`
    }

    // Add the code at the end of the prompt
    prompt += `\n\nCode to review:\n${code}`;

    // Generate review
    return await generateContent(prompt);
};
