import { useEffect, useState } from "react";
import * as taskService from "./services/taskService";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  const loadTasks = async () => {
    const res = await taskService.getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleSave = async (task) => {
    if (editTask) {
      await taskService.updateTask(editTask._id, task);
      setEditTask(null);
    } else {
      await taskService.createTask(task);
    }
    loadTasks();
  };

  const handleDelete = async (id) => {
    await taskService.deleteTask(id);
    loadTasks();
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskForm onSubmit={handleSave} currentTask={editTask} />
      <TaskList tasks={tasks} onEdit={setEditTask} onDelete={handleDelete} />
    </div>
  );
}

export default App;
