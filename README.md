# Secure Task Manager API (MERN Stack)

A scalable REST API for task management with secure JWT authentication and role-based access control. Built for Primetrade.ai Backend Developer Intern assignment.

Includes a responsive React frontend to demonstrate full CRUD operations and protected routes.

## Screenshots

## Demo / Screenshots

### Dashboard (Task Management)

<img width="1862" height="874" alt="Screenshot 2025-12-14 160030" src="https://github.com/user-attachments/assets/5e24de2d-396a-473f-a02f-f42c061b27f7" />


### Swagger API Documentation!

<img width="1881" height="897" alt="Screenshot 2025-12-14 160110" src="https://github.com/user-attachments/assets/ebf40089-4c75-4add-90f1-7116097766eb" />

<img width="1876" height="893" alt="Screenshot 2025-12-14 160055" src="https://github.com/user-attachments/assets/5eba8171-9eaf-4e7b-a1bf-003a991cba70" />



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
