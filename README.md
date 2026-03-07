🚀 AI Career Guide (MERN + AI)

An AI-powered Career Guidance Web Application that analyzes user skills and interests to generate personalized career recommendations using AI.

The application includes secure authentication, protected routes, and AI-powered career analysis built using the MERN stack.

📌 Features

🔐 User Authentication (Register / Login / Logout)

🔑 JWT-based secure authentication

🧠 AI-powered career analysis

📝 Career interest & skill input form

📊 AI-generated career recommendations

🔒 Protected routes for authenticated users

⚡ Fast frontend with modern UI

🔔 Real-time notifications using Toast messages

🛡 Backend security with rate limiting and helmet

🛠 Tech Stack
Frontend

React

React Router

Tailwind CSS

Axios

React Toastify

Vite

Backend

Node.js

Express.js

MongoDB

JSON Web Token

AI Integration

Google Generative AI

Security & Middleware

Helmet

Express Rate Limit

Express Validator

Morgan Logger

📂 Project Structure
ai-career-guide
│
├── backend
│   ├── config
│   │   └── Db.js
│   ├── controllers
│   │   ├── AuthController.js
│   │   └── careerController.js
│   ├── middlewares
│   │   ├── errorMiddleware.js
│   │   ├── rateLimiter.js
│   │   └── ValidatorMiddleware.js
│   ├── routes
│   │   ├── AuthRoute.js
│   │   └── CareerRoute.js
│   └── server.js
│
├── frontend
│   ├── components
│   │   ├── Header.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── CareerForm.jsx
│   │   └── CareerResult.jsx
│   └── App.jsx
⚙️ Installation
1️⃣ Clone the Repository
git clone https://github.com/yourusername/ai-career-guide.git
2️⃣ Install Backend Dependencies
cd backend
npm install
3️⃣ Install Frontend Dependencies
cd frontend
npm install
4️⃣ Environment Variables

Create a .env file in the backend folder.

Example:

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
GOOGLE_AI_API_KEY=your_api_key
5️⃣ Run the Backend
npm run dev
6️⃣ Run the Frontend
npm run dev
📊 Application Architecture
User
 ↓
React Frontend
 ↓
Express API Server
 ↓
Authentication + Career AI API
 ↓
MongoDB Database
 ↓
Google Generative AI API
📚 What I Learned

Building full-stack MERN applications

Implementing secure authentication using JWT

Creating protected routes in React

Integrating AI APIs into web applications

Designing scalable REST APIs

Applying backend security best practices

🔮 Future Improvements

Career roadmap generation

Resume analysis using AI

Career skill gap analysis

Admin dashboard

Deployment with Docker

👨‍💻 Author

Rohit Bodalkar

GitHub: https://github.com/Rb-rohit
