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

## Installation

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

## Usage

1. Start the server:
    ```sh
    npm start
    ```

2. The server will start on port 3000. You can access it at `http://localhost:3000`.

## API Endpoints

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

## Dependencies

- `@google/generative-ai`: ^0.24.0
- `dotenv`: ^16.4.7
- `express`: ^4.21.2



