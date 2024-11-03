import React from 'react';

function Task({ task, removeTask, doneTask }) {
  return (

    <li>
      <p
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        onClick={() => doneTask(task.id)}>
        
        {task.text}
      </p>
      <button onClick={() => removeTask(task.id)}>Eliminar</button>
    </li>
  );
}

export default Task;