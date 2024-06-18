import Todocontainer from "./TodoMessageBox/Todocontainer.js";

const TaskContainer = (props) => {
  return props.userTask.map((task) => (
    <Todocontainer
      key={task.id}
      data={task}
      onDeleteTask={props.onDeleteTask}
      onEditingTaskValue={props.onEditingTaskValue}
      changeStatus = {props.changeStatus}
    />
  ));
};

export default TaskContainer;
