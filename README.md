# Secure Task Manager API (MERN Stack)

A scalable REST API for task management with secure JWT authentication and role-based access control. Built for Primetrade.ai Backend Developer Intern assignment.

Includes a responsive React frontend to demonstrate full CRUD operations and protected routes.

## Screenshots

## Demo / Screenshots

### Dashboard (Task Management)

<grok-card data-id="364710" data-type="image_card"></grok-card>


### Swagger API Documentation

<grok-card data-id="b15daa" data-type="image_card"></grok-card>





## Features

- Secure user registration/login with bcrypt hashing
- JWT in HTTP-only cookies
- Role-based access (user: own tasks | admin: all tasks)
- Full task CRUD with ownership validation
- API versioning, error handling, input sanitization
- Swagger documentation
- Modular structure for scalability
- Secure admin creation (via seed script)

## Tech Stack

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT + bcryptjs

### Frontend
- React (Vite)
- Tailwind CSS
- Axios + React Router + React Toastify

## Run Locally

### Backend
```bash
cd backend
npm install
node seedAdmin.js  # Creates admin: admin@taskapp.com / admin123
npm run dev

Frontend
cd frontend
npm install
npm run dev

Environment Variables (.env in backend)
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=strong_secret
JWT_EXPIRE=7d


#### API Reference
```markdown
## API Reference

Interactive documentation: `http://localhost:5000/api-docs`

Key Endpoints:
- POST `/api/v1/auth/register`
- POST `/api/v1/auth/login`
- GET/POST/PUT/DELETE `/api/v1/tasks`





## Deployment & Scalability

- Ready for Docker, Redis caching, PM2 clustering
- Modular design supports microservices
- Horizontal scaling with load balancing
