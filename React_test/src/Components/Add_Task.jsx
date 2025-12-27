import React from 'react'
import { useState } from 'react'

const Add_Task = ({ setTodoList, sethidden }) => {

    const [taskTitle, setTaskTitle] = useState("");
    const [TheTask, setTheTask] = useState("")
    const [date,setdate]=useState("")
    const [close, setclose] = useState(false)
    const handleAddTask = (e) => {
        e.preventDefault()
        const newTask = {
            id: Date.now() + Math.random(),
            title: taskTitle,
            TheTask: TheTask,
            CreatTask: new Date(Date.now()),
            Complet: close
        }
        setTodoList(prev => [...prev, newTask])
        setTaskTitle("")
        setTheTask("")
        sethidden(false)
        setclose(false)

    }


    return (
        <div>
            <form onSubmit={handleAddTask}>

                <div>
                    <input onChange={(e) => setTaskTitle(e.target.value)} placeholder="Enter Task Title" />

                </div>
                <div>
                    <textarea onChange={(e) => setTheTask(e.target.value)} />
                </div>


                <div>
                    <button type="submit">Add New Task</button>
                </div>

            </form>
        </div>
    )
}
export default Add_Task



