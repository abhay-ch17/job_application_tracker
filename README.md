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
<img width="1920" height="929" alt="Screenshot (74)" src="https://github.com/user-attachments/assets/2c7895c3-4207-4cc9-9121-f523feeb933b" />
<img width="1920" height="929" alt="Screenshot (73)" src="https://github.com/user-attachments/assets/2889dfbc-3010-40f9-b30a-eaf2c8863385" />
<img width="1920" height="929" alt="Screenshot (72)" src="https://github.com/user-attachments/assets/9ae472dc-a37f-4ca9-88b6-974fb06f7eb1" />


## demo link
https://jobb-tracker.netlify.app/

## Local Setup
1. Clone the repo
2. cd job_tracker_back && npm install
3. cd ../job_tracker_front && npm install
4. Add .env files in job_tracker_back folders (see .env.example)
5. Start MongoDB (local or set MONGO_URI to Atlas)
6. Backend: cd job_tracker_back && npm start (or node app)
7. Frontend: cd job_tracker_front && npm run dev
