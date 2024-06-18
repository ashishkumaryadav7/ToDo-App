import { useState, useEffect } from "react";
import "./InputBox.css";

function InputBox(props) {
  const [enteredTask, setEnteredTask] = useState("");

  useEffect(() => {
    if (props.editingTask) {
      setEnteredTask(props.editingTask.task);
    } else {
      setEnteredTask("");
    }
  }, [props.editingTask]);

  const NewTaskHandler = (event) => {
    setEnteredTask(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredTask) {
      const taskTime = new Date();
      const date = taskTime.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: '2-digit' });
      const time = taskTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const newTaskData = {
        task: enteredTask,
        date: date,
        time: time,
      };
      props.onSaveTask(newTaskData); /* sending data to the parent*/

      setEnteredTask(""); /* use for reset the data*/
    }
    else{
      alert('Enter your task');
    }
  };

  return (
    <div className="input-container m-2">
      <form onSubmit={submitHandler} className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Plan your day..."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={NewTaskHandler}
          value={enteredTask}
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          {props.editingTask ? "Update" : "ADD"}
        </button>
      </form>
    </div>
  );
}

export default InputBox;