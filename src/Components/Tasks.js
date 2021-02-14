import React from 'react'
import Task from './Task'

const Tasks = ({tasks, deleteTask, toggleReminder}) => {
    return (
        <div>
            {tasks.map(task => (<Task toggleReminder = {toggleReminder} key = { task.id} tasks = {task} deleteTask = {deleteTask}/>))}
        </div>
    )
}

export default Tasks
