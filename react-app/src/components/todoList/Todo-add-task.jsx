import React, { useState } from "react";

const TodoAddTask = ({ addTask }) => {
  const [title, setTitle] = useState("");


  const addTaskHandler = (title) => {
    addTask(title);
  }

  return (
    <div className="add-task">
      <img
        src={require("../../images/todoList.png")}
        alt="Todo list icon"
        className="add-task__icon"
      />

      <input
        type="text"
        className="add-task__text"
        id="add-task-text"
        placeholder="Enter your next task"
        onChange={(e) => setTitle(e.target.value)}
      />

      <button className="add-task__btn" onClick={addTaskHandler(title)}>
        <img
          src={require("../../images/add-task_icon.jpg")}
          alt="white plus icon"
          style={{ width: "20px", height: "20px" }}
        />
      </button>
    </div>
  );
};

export default TodoAddTask;

// document.getElementById("add-task-btn").addEventListener("click", function () {

//   document.querySelectorAll(".buttonClass").forEach((item) => {
//     item.addEventListener("click", (e) => {
//       change();
//     });
//   });
// });

// function change() {
//   document.querySelectorAll("#b2").forEach((item) => {
//     item.parentNode.style = "text-decoration: line-through;";
//   });
// }
