import React from 'react'
import { useState } from 'react'
import Add_Task from './Add_Task'
import All_Task from './All_Task'
import Details_Task from './Details_Task'


const Conteners = () => {
    const [todoList, setTodoList] = useState([]);
    const [hidden, sethidden] = useState(false)
    const [selectedTask, setSelectedTask] = useState(null)

    function toggleComplete(id) {
         setTodoList(prev => prev.map(task => task.id === id ? { ...task, Complet: !task.Complet } : task))
         }

    return (
        <div>
            {hidden ? (<Add_Task
                setTodoList={setTodoList}
                sethidden={sethidden}
            />
            ) : (
                <>
                    < button onClick={() => sethidden(true)} > Open From</button>
                    <All_Task todoList={todoList} toggleComplete={toggleComplete}   setSelectedTask={setSelectedTask}/>

                </>
            )

            }
          
        </div>
    )
}

export default Conteners

