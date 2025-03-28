import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"; 
import axios from "axios";
import './App.css'
import Editor from "react-simple-code-editor";
function App() {
  const [count, setCount] = useState(0)
  const [code, setCode] = useState(`
      function sum(){
        return 1+1
      }
    `)

  const [review, setReview] = useState('')
  useEffect(()=>{
    prism.highlightAll();
  },[]);

  async function reviewCode() {
    try {
      const response = await axios.post("http://localhost:3000/ai/get-review", { code });
  
      console.log("Full Response:", response); // ✅ Check full response structure
      console.log("Response Data:", response.data); // ✅ Check if `data` exists
      console.log("Review Text:", response.data); // ✅ Check if `review` exists inside `data`
  
      setReview(response.data|| "No review available"); // Ensure non-null value
  
    } catch (error) {
      console.error("Error fetching review:", error);
      setReview("Failed to fetch review.");
    }
  }
  
  
  return (
    <>
    <main>
      <div className='left'>
        <div className='code'>
          <Editor
          value={code}
          onValueChange={code => setCode(code)}
          highlight={code => prism.highlight(code, prism.languages.javascript , "javascript")}
          padding={10}
          style={{
            fontFamily : '"Fira code","Fira Mono", monospace',
            fontSize:16,
            border: "1px solid #ddd",
            borderRadius : "5px",
            height : "100%",
            weight: "100%"

          }}
          
          />

        </div>
        <div 
        onClick={reviewCode}
        className='review'>
          Review 
        </div>
      </div>
      <div className='right'>
         <div className='review-content'>
          {review ? review : "No review "}
         </div>
      </div>
    </main>
    </>
  )
}

//dummy function
function sum(){
  return 1+1;
}

export default App
