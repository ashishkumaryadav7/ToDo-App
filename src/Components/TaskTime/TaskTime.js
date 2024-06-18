import './TaskTime.css';

const TaskTime = (props) => {
  return (
    <div className='task-date'>
      {props.time}
    </div>
  )
}

export default TaskTime
