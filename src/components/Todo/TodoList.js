import React from 'react'

const TodoList = (props) => {
    const handleRemoveTask =(item) => {
        props.onRemoveTask(item)
    }

    return(
        <div className='todo-list'>
            <h2>Lista de tarefas</h2>
            <ul>
                {props.taskslist.map((item, key)=>(
                    <li key={key} className="todo-li">
                        <label>{item}</label> 
                        <button onClick={() => handleRemoveTask(key)} >x</button>
                    </li>
                    ))}
            </ul>

        </div>
    )
}

export default TodoList