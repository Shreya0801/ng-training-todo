# To-Do List App

This is a simple full-stack To-Do List application where users can add, view, edit, and delete tasks.

- Backend: **Node.js**, **Express.js**, and **MongoDB**
- Frontend: **React**

---

## Project Structure

```
todo-mean-app/
├── client/   → React frontend
├── server/   → Node.js backend (Express + MongoDB)
```

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/ng-training-todo.git
cd ng-training-todo
```

### 2. Start the backend
```bash
cd server
npm install
npm run dev
```

### 3. Start the frontend
```bash
cd ../client
npm install
npm start
```

---

## API Endpoints

| Method | Endpoint         | Description        |
|--------|------------------|--------------------|
| GET    | `/api/tasks`     | Get all tasks      |
| POST   | `/api/task`      | Add a new task     |
| PUT    | `/api/task/:id`  | Update a task      |
| DELETE | `/api/task/:id`  | Delete a task      |

---

## Features

- Create a new task
- View all tasks
- Edit an existing task
- Delete a task
- Responsive user interface

---
## Note

Make sure to add your MongoDB URI in a `.env` file inside the `/server` folder:
```
MONGO_URI=mongodb://localhost:27017/todo-app
```

---

## Author

Built by Shreya Singh
