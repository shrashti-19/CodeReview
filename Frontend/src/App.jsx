import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"; 
import axios from "axios";
import './App.css'
import Editor from "react-simple-code-editor";
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';


function App() {
  const [count, setCount] = useState(0)
  const [code, setCode] = useState(`
      function sum(){
        return 1+1
      }
    `)
  const [language, setLanguage] = useState('javascript');

  const [review, setReview] = useState('')
  const [reviewLevel, setReviewLevel]= useState('light');


  useEffect(()=>{
    prism.highlightAll();
  },[]);

  async function reviewCode() {
    try {
      const response = await axios.post("http://localhost:3000/ai/get-review", { 
        code,
        language,
        reviewLevel
      });
  
      console.log("Full Response:", response); 
      console.log("Response Data:", response.data); 
      console.log("Review Text:", response.data); 
  
      setReview(response.data|| "No review available"); 
  
    } catch (error) {
      console.error("Error fetching review:", error);
      setReview("Failed to fetch review.");
    }
  }
  
  
  return (
    <>
    <main>
      <div className='left'>
        <div className='language-selector'>
          <label htmlFor='language'>Select Language:</label>
          <select
           id='language'
           value={language}
           onChange={(e)=>setLanguage(e.target.value)}
          >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          {/* <option value="C++">C++</option> */}
          </select>
        </div>
        {/*Review Level Selector*/}
        <div className='review-level-selector'>
          <label htmlFor='reviewLevel'>Select Review Level:</label>
          <select
          id='reviewLevel'
          value={reviewLevel}
          onChange={(e)=> setReviewLevel(e.target.value)}
          >
          <option value="light">Light Review</option>
          <option value="heavy">Heavy Review</option>
          </select>

        </div>
        <div className='code'>
          <Editor
          value={code}
          onValueChange={code => setCode(code)}
          highlight={code => prism.highlight(code, prism.languages[language],language)}
          padding={10}
          style={{
            fontFamily : '"Fira code","Fira Mono", monospace',
            fontSize:16,
            border: "1px solid #ddd",
            borderRadius : "5px",
            height : "400%",
            weight: "100%",
            overflow: 'auto'

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
