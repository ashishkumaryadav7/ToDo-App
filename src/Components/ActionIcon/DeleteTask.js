import "boxicons/css/boxicons.min.css";
import "./DeleteTask.css";
const DeleteTask = (props) => {
  const deleteElement = () => {
    props.onDelete();
  };
  return (
    <i className="bx bxs-trash-alt fs-4 delete-box" onClick={deleteElement}></i>
  );
};

export default DeleteTask;
