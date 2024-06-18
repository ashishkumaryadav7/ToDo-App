import React from 'react'
import './Status.css'
import Updated from './Updated'
import Completed from './Completed'
const Status = (props) => {
  return (
    <div className='status-block position-absolute text-black-50 top-0 start-50 d-flex justify-content-between'>
      {props.edited && <Updated />}
      {props.Done && <Completed />}
    </div>
  )
}

export default Status
