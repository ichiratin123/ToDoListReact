import React from "react";

const ToDoList = () => {
  const [tasks, setTask] = React.useState([]);
  const [newTask, setNewTask] = React.useState("");

  function inputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function delTask(index) {
    const up = tasks.filter((_, i) => i !== index);
    setTask(up);
  }

  return (
    <>
      <div className="todolist">
        <h1>What you will do?</h1>
        <div>
          <input
            type="text"
            placeholder="Do something?"
            value={newTask}
            onChange={inputChange}
          />
          <button className="addbtn" onClick={addTask}>
            ADD
          </button>
        </div>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button className=" delbtn" onClick={() => delTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default ToDoList;
