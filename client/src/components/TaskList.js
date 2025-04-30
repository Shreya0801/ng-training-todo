const TaskList = ({ tasks, onEdit, onDelete }) => (
  <ul>
    {tasks.map((task) => (
      <li key={task._id}>
        {task.title}
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task._id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default TaskList;
