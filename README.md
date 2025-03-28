# AI_CODE_REVIEW
AI code review application

# Backend

This is the backend service for the AI Code Review application. It provides an API to analyze and review code using Google's Generative AI.

## Project Structure
Backend/ 
   .env 
   .gitignore 
   package.json 
   server.js 
   temp.js 
   temp.md 
   src/ app.js 
        controllers/ 
        ai.controller.js 
        routes/ ai.route.js 
        services/ ai.service.js

## Backend Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd Backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the `Backend` directory and add your Google Gemini API key:
    ```
    GOOGLE_GEMINI_KEY=your_google_gemini_key
    ```

## Backend Usage

1. Start the server:
    ```sh
    npm start
    ```

2. The server will start on port 3000. You can access it at `http://localhost:3000`.

## Backend API Endpoints

- `POST /ai/get-review`: Analyze and review the provided code.

    **Request Body:**
    ```json
    {
        "code": "your_code_here"
    }
    ```

    **Response:**
    ```json
    {
        "review": "code_review_feedback"
    }
    ```

## Backend Dependencies

- `@google/generative-ai`: ^0.24.0
- `dotenv`: ^16.4.7
- [express](http://_vscodecontentref_/9): ^4.21.2

---

# Frontend

This is the frontend service for the AI Code Review application. It provides a user interface to input code and view the review results.

## Frontend Project Structure
  Frontend/
  .gitignore 
  eslint.config.js
  index.html 
  package.json 
  README.md 
  vite.config.js 
  public/  
    vite.svg 
    src/ 
     App.css 
     App.jsx 
     index.css 
     main.jsx 
     assets/
       react.svg

## Frontend Installation

1. Navigate to the [Frontend](http://_vscodecontentref_/10) directory:
    ```sh
    cd Frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Frontend Usage

1. Start the development server:
    ```sh
    npm run dev
    ```

2. The development server will start, and you can access the application at `http://localhost:5173`.

## Frontend Features

- **Code Editor:** Allows users to input code for review.
- **Code Review Results:** Displays feedback and suggestions for the provided code.

## Frontend Dependencies

- [axios](http://_vscodecontentref_/11): ^1.8.4
- `prismjs`: ^1.30.0
- [react](http://_vscodecontentref_/12): ^19.0.0
- [react-dom](http://_vscodecontentref_/13): ^19.0.0
- [react-markdown](http://_vscodecontentref_/14): ^10.1.0
- [react-simple-code-editor](http://_vscodecontentref_/15): ^0.14.1

