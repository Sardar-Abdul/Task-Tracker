import React from 'react'

const Header = ({onShow, showAddTask}) => {
    return (
        <div className = 'header'>
            <h1>Task Tracker App</h1>
            <button onClick = {onShow} className = 'btn' style = {{backgroundColor: showAddTask ? 'red': 'green'}}>{showAddTask ? 'Close Tasks': 'Add Task'} </button>
        </div>
    )
}

export default Header
