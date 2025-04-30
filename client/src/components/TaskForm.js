import { useState, useEffect } from "react";

const TaskForm = ({ onSubmit, currentTask }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (currentTask) setTitle(currentTask.title);
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        required
      />
      <button type="submit">{currentTask ? "Update" : "Add"}</button>
    </form>
  );
};

export default TaskForm;
