import React, {useState} from 'react'

import './style.css'

const TodoForm = (props) => {
    const [task, setTask] = useState('')

    const handleChangeTask =(event) => {
        let newTask = event.target.value
        setTask(newTask)
    }

    const handleAddTaskToList = (event) => {
        event.preventDefault()
        if(task){
            props.onAddTask(task)
            setTask('')
        }
    }

    return(
        <form className='todo-form'>
            <input type='text'
                value={task}
                onChange={handleChangeTask}
                placeholder='Adicione a tarefa' />
            <button type='submit'
                onClick={handleAddTaskToList}
            >
                Adicionar
            </button>
        </form>
    )
}

export default TodoForm