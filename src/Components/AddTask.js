import React, {useState} from 'react'

const AddTask = ({addTask}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const submit = (e) => {
        e.preventDefault();
        
        if (!text) {
            alert('Please, enter task to continue.')
            return
        }
        addTask({text, day, reminder})
        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className = 'add-form' onSubmit = {submit}>
            <div className = 'form-control'>
                <label>Add Task:</label>
                <input type = 'text' onChange = {(e) => setText(e.target.value)} value = {text} placeholder = 'Add Task'/>
            </div>
            <div className = 'form-control'>
                <label>Day :</label>
                <input type = 'date' onChange = {(e) => setDay(e.target.value)} value = {day} placeholder = 'Add Day & time'/>
            </div>
            <div className = 'form-control'>
                <label>Set Reminder</label>
                <input type = 'checkbox'  checked = {reminder} onChange = {(e) => setReminder(e.currentTarget.checked)} value = {reminder}/>
            </div>
            <input type ='submit' value = 'Save Task' className = 'btn btn-block'/>
        </form>
    )
}

export default AddTask
