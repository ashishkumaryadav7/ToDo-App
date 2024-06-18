import React from "react";
import Heading from "./Headbox/Heading";
import InputBox from "./InputContainer/InputBox";
import { useState } from "react";
import TaskContainer from "./TaskContainer";

function Main() {
  const [newTaskEnterd, setNewTask] = useState([]);

  const [editingTask, setEditingTask] = useState(null);

  const [statusval, updateStatus] = useState(null);

  const saveNewTask = (enteredNewTask) => {
    if (editingTask) {
      const updatedTasks = newTaskEnterd.map((task) =>
        task.id === editingTask.id
          ? task.task !== enteredNewTask.task
            ? { ...task, ...enteredNewTask, edited: true }
            : task
          : task
      );
      setNewTask(updatedTasks);
      setEditingTask(null); // Reset the editing task
    } else {
      const newTaskValue = {
        id: Math.random().toString(),
        ...enteredNewTask,
        edited: false,
      };
      const addNewTask = [newTaskValue, ...newTaskEnterd];
      setNewTask(addNewTask);
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = newTaskEnterd.filter((task) => task.id != taskId);
    setNewTask(updatedTasks);
  };

  const editingTaskHandler = (task) => {
    setEditingTask(task);
  };

  const statusHandler = (taskId) => {
    const updatedTasks = newTaskEnterd.map((task) =>
      task.id === taskId ? { ...task, done: true } : task
    );
    setNewTask(updatedTasks);
  };

  return (
    <div className="container container-main w-100 container-md rounded p-2 h-auto">
      <Heading />
      <InputBox onSaveTask={saveNewTask} editingTask={editingTask} />
      <TaskContainer
        userTask={newTaskEnterd}
        onDeleteTask={deleteTask}
        onEditingTaskValue={editingTaskHandler}
        changeStatus={statusHandler}
      />
    </div>
  );
}

export default Main;
