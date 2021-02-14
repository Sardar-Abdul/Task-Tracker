import React, { useState} from 'react'

import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState('')
  const [showAdd, setShowAdd] = useState(false)
  //actions:
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 )
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  const onShow = () =>{
    setShowAdd(!showAdd)
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: !task.reminder}: task))
  }
  return(
    <div className =' container '>
      {<Header showAddTask = {showAdd} onShow ={onShow}/>}
      {showAdd ? <AddTask  addTask = {addTask}/>: ""}
      {tasks.length > 0  ? <Tasks 
      tasks = {tasks} 
      toggleReminder = {toggleReminder} 
      deleteTask = {deleteTask}/>: 'No Tasks To Show'}
    </div>
  )
}

export default App;