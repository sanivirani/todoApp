
# 📝 React Redux Task Manager

A simple task management app built with **React**, **Redux Toolkit**, and **Tailwind CSS**. Users can add, edit, delete, and toggle the status of tasks. Tasks are persisted in **localStorage**.

---

## 🚀 Features

- Add new tasks
- Edit existing tasks
- Mark tasks as completed or pending
- Delete tasks
- Filter tasks by: All | Completed | Pending
- LocalStorage support to persist data
- Responsive and clean UI using Tailwind CSS

---

## 💠 Tech Stack

- React
- Redux Toolkit
- Tailwind CSS
- LocalStorage (for persistence)

---

## 🛆 Installation

1. **Clone the repository:**

```bash
https://github.com/sanivirani/todoApp
cd task-app
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm start
```

> App will run at: `http://localhost:5173/` (if using Vite) otherwise 3000

---

## 📁 Project Structure

```bash
src/
│
├── components/
│   ├── Taskitem.js       # Single task item
│   └── TaskList.js       # List of all tasks
│
├── redux/
│   ├── store.js          # Redux store configuration
│   └── taskSlice.js      # Task reducer with actions
│
├── App.js                # Main component
├── index.js              # App entry point
└── index.css             # Tailwind styles
```

---

## 🧠 State Management (Redux)

- The app uses Redux Toolkit's `createSlice` to manage the task list.
- Actions:
  - `addTask`
  - `editTask`
  - `toggleTask`
  - `deleteTask`
  - `setTasks` (used for syncing with localStorage)

---

## 📂 Persistence

- Tasks are automatically saved in `localStorage` whenever they are updated.

---

## 📄 License

MIT License. Use this freely in your own projects.

---

## 🙌 Acknowledgements

- Redux Toolkit Docs
- Tailwind CSS Docs
- React Official Docs
