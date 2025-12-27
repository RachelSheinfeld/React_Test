import React from 'react'
import { useState } from 'react'


const All_Task = ({ todoList, toggleComplete, setSelectedTask }) => {
  return (
    <div>
      {todoList.map((task) => (
        <div key={task.id} onClick={() => setSelectedTask(task)}>
          <h3 style={{
            textDecoration: task.Complet ? "line-through" : "none"
          }}
          >{task.title}</h3>
          <p >{task.TheTask}</p>
          <p>{task.id}</p>
          <p>{task.Complet.toString()}</p>
          <p>{task.CreatTask.toString()}</p>
          <input
            type="checkbox"
            checked={task.Complet}
            onChange={() => toggleComplete(task.id)}
          />
        </div>
      ))}
    </div>
  )

}

export default All_Task