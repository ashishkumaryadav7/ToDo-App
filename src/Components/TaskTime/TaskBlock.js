import React from "react";
import TaskDate from "./TaskDate";
import TaskTime from "./TaskTime";
import "./TaskBlock.css";

const TaskBlock = (props) => {
  return (
    <div className="tasktime position-absolute text-black-50 top-0 start-0 d-flex d-flex justify-content-between">
      <TaskDate date={props.date} />
      <TaskTime time={props.time} />
    </div>
  );
};

export default TaskBlock;
