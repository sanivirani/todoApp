import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, updateTask, deleteTask } from "../redux/taskSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleSave = () => {
    if (newTitle.trim()) {
      dispatch(updateTask({ id: task.id, title: newTitle }));
      setEdit(false);
    }
  };

  return (
    <div className="flex justify-between items-center bg-gray-100 p-2 rounded">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch(toggleComplete(task.id))}
        />
        {edit ? (
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="border px-1"
          />
        ) : (
          <span className={task.completed ? "line-through" : ""}>
            {task.title}
          </span>
        )}
      </div>
      <div className="flex gap-1 text-sm">
        <button
          onClick={edit ? handleSave : () => setEdit(true)}
          className="text-blue-500"
        >
          {edit ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="text-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
