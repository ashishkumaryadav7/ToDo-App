import React from 'react'
import './TaskCompleted.css'

const TaskCompleted = (props) => {
  return (
    <div>
      <i className='bx bx-check fs-3 fw-bold check' onClick={props.onClick}></i>
    </div>
  )
}

export default TaskCompleted
