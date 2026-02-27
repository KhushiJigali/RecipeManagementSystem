# Recipe Management System (MEAN Stack)

## Overview
A full-stack web application built using the MEAN stack that enables users to browse and search recipes, while allowing authors to create, update, and manage their own recipes. The system is designed with role-based access control and RESTful API architecture.

---

## Features

### User Features
- View all available recipes
- Search recipes by name or category
- View detailed recipe information

### Author Features
- Add new recipes
- Edit existing recipes
- Delete recipes
- Manage personal recipe collection

---

## Tech Stack

Frontend:
- Angular
- HTML, CSS

Backend:
- Node.js
- Express.js (REST API)

Database:
- MongoDB (Mongoose for schema modeling)

Tools:
- Git
- Postman (API testing)

---

## Architecture

The application follows a client-server architecture:

- Angular frontend communicates with the backend using RESTful APIs.
- Express.js handles routing, authentication logic, and business rules.
- MongoDB stores recipe and user data with structured schemas.
- Role-based access control ensures that only authors can modify content.

---

## API Highlights

- GET /recipes → Fetch all recipes
- GET /recipes/:id → Fetch single recipe
- POST /recipes → Add new recipe (Author only)
- PUT /recipes/:id → Update recipe (Author only)
- DELETE /recipes/:id → Delete recipe (Author only)

---

## Installation & Setup

1. Clone the repository
2. Install backend dependencies:
   npm install
   npm start

3. Install frontend dependencies:
   npm install
   ng serve

4. Ensure MongoDB is running locally

---

## Future Enhancements
- JWT-based authentication
- Cloud deployment (AWS/GCP)
- Docker containerization
- AI-based personalized recipe recommendations
