import React, { useState } from "react";

function AddTaskForm({ addTask }) {
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newTask.trim()) return
        addTask(newTask)
        setNewTask('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                placeholder="Añade una tarea" 
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)} 
            />
            <button type="submit">Añadir</button>
        </form>
    );
}

export default AddTaskForm;