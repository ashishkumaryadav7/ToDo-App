import "./Todocontainer.css";
import DeleteTask from "../ActionIcon/DeleteTask";
import EditTask from "../ActionIcon/EditTask";
import TaskBlock from "../TaskTime/TaskBlock";
import Status from '../Status/Status';
import TaskCompleted from '../ActionIcon/TaskCompleted'
function Todocontainer(props) {
  const onEditingTaskValue = () => {
    props.onEditingTaskValue(props.data);
  };
  const changeStatus = ()=>{
    props.changeStatus(props.data.id);
  }
  return (
    <div className={`message-container container rounded m-0 mb-2 p-3 ${props.data.done ? 'completed' : ''}`}>
      <div className="row">
        <div className="col-9 message-block position-relative">
          {props.data.task}
          <TaskBlock date={props.data.date} time={props.data.time}/>
          <Status edited = {props.data.edited} Done = {props.data.done}/>
        </div>
        <div className="col-1 p-1">
        {!props.data.done && <EditTask onClick={onEditingTaskValue} />}
        </div>
        <div className="col-1 p-1">
      <TaskCompleted onClick = {changeStatus}/>
        </div>
        <div className="col-1 p-1">
          <DeleteTask onDelete={() => props.onDeleteTask(props.data.id)} />
        </div>
      </div>
    </div>
  );
}

export default Todocontainer;
