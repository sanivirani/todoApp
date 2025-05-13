import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./redux/taskSlice";
import TaskList from "./components/TaskList";

const App = () => {
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");
  const tasks = useSelector((state) => state.tasks.taskList);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = () => {
    if (!title.trim()) return;
    dispatch(addTask({ id: Date.now(), title, completed: false }));
    setTitle("");
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "uncompleted") return !task.completed;
    return true;
  });

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow mt-10 rounded">
      <h1 className="text-2xl font-bold text-center mb-4">Todo App</h1>
      <div className="flex gap-2 mb-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border flex-grow px-2 py-1"
          placeholder="Enter task"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Add Task
        </button>
      </div>

      <div className="flex gap-2 justify-center mb-3">
        <button
          onClick={() => setFilter("all")}
          className="text-sm bg-gray-200 px-2 rounded"
        >
          All Task
        </button>
        <button
          onClick={() => setFilter("completed")}
          className="text-sm bg-green-200 px-2 rounded"
        >
          Completed Task
        </button>
        <button
          onClick={() => setFilter("uncompleted")}
          className="text-sm bg-yellow-200 px-2 rounded"
        >
          Pending Task
        </button>
      </div>

      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default App;
