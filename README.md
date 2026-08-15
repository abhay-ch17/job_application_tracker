# Job Application Tracker

A full-stack MERN application to track job applications with status updates.

## Features
- User authentication (JWT + httpOnly cookies)
- Create, read, update, delete job applications
- Filter applications by status
- Protected routes

## Tech Stack
- Frontend: React, React Router, Tailwind CSS, Axios
- Backend: Node.js, Express, MongoDB, Mongoose
- Auth: JWT, bcrypt, httpOnly cookies


## Screenshots
<img width="1920" height="929" alt="Screenshot (74)" src="https://github.com/user-attachments/assets/86afb85e-3945-4555-8df0-dd1e6d91d95d" />
<img width="1920" height="929" alt="Screenshot (73)" src="https://github.com/user-attachments/assets/2d0d509a-57b4-4137-8f2e-6f9502945550" />
<img width="1920" height="929" alt="Screenshot (72)" src="https://github.com/user-attachments/assets/36d1a207-f8ad-41c0-82aa-5b55bbedf129" />


## demo link
https://jobb-tracker.netlify.app

## Local Setup
1. Clone the repo
2. cd job_tracker_back && npm install
3. cd ../job_tracker_front && npm install
4. Add .env files in job_tracker_back folders (see .env.example)
5. Start MongoDB (local or set MONGO_URI to Atlas)
6. Backend: cd job_tracker_back && npm start (or node app)
7. Frontend: cd job_tracker_front && npm run dev
