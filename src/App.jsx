import './App.css'
import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';

const  tasksInit= [
  { id: 1, text: 'Hacer la compra', completed: false },
  { id: 2, text: 'Llamar al médico', completed: true },
  { id: 3, text: 'Hacer ejercicio', completed: false }
]

const App = () => {
 
  const [tasks, setTasks] = useState(tasksInit)

  const addTask = (text) => {
    const newTask = {
      id: tasks.length +1,
      text: text,
      completed: false
    }
    setTasks ([...tasks, newTask])
  }
 const removeTask = (id) => {
  setTasks(tasks.filter(task => task.id !== id))
 }

const doneTask = (id) => {
  setTasks(tasks.map(task =>
    task.id === id ? {...task, completed: !task.completed} : task
  ))
}
  

  return (
    <>
    <h1>Lista de Tareas</h1>
      <AddTaskForm addTask={addTask} />
      <ul>
        {tasks.map(task => (
          <Task 
            key={task.id} 
            task={task} 
            removeTask={removeTask} 
            doneTask={doneTask} 
          />
        ))}
      </ul>
    </>
  );
};

export default App;
