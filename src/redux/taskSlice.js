// src/redux/taskSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: JSON.parse(localStorage.getItem("tasks")) || [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.taskList.unshift(action.payload);
    },
    toggleComplete: (state, action) => {
      const task = state.taskList.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    updateTask: (state, action) => {
      const task = state.taskList.find((t) => t.id === action.payload.id);
      if (task) task.title = action.payload.title;
    },
    deleteTask: (state, action) => {
      state.taskList = state.taskList.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTask, toggleComplete, updateTask, deleteTask } =
  taskSlice.actions;
export default taskSlice.reducer;
