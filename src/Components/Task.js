import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({tasks, deleteTask, toggleReminder}) => {
    return (
        <div className = {`task ${tasks.reminder ? 'reminder': ''}`} onDoubleClick = {() => toggleReminder(tasks.id)}>
            <h3>{tasks.text} <FaTimes onClick = {() => deleteTask(tasks.id)} style = {{color: 'red'}}/> </h3>
            <p>{tasks.day}</p>
        </div>
    )
}

export default Task
