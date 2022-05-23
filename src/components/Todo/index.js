import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

import './style.css'

const Todo = () => {
    const [tasksList, setTasksList] = useState([])
    const handleAddTaskToList = (newTask) => {
        setTasksList([...tasksList, newTask])
    }
    const handleRemoveTask = (keyRemove) => {
        setTasksList(tasksList.filter((item, key) => key !== keyRemove))
     }
    return(
        <div className='todo-wrapper'>
            <h1>Gerenciando Tarefas</h1>
            
            <TodoForm onAddTask={handleAddTaskToList} />

            <TodoList taskslist={tasksList} onRemoveTask={handleRemoveTask}/>
        </div>
    )
}

export default Todo