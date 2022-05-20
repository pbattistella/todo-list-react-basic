import React from 'react'

const TodoList = (props) => {

    return(
        <div className='todo-list'>
            <h2>Lista de tarefas</h2>
            <ul>
                {props.taskslist.map((item, key)=>(<li key={key}>{item}</li>))}
            </ul>

        </div>
    )
}

export default TodoList