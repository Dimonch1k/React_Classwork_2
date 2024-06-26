import React, { useState } from "react";
import { taskList } from "./taskList";

const TodoItem = ({ task, removeTask}) => {
  // state of component. Its change make rerender of component
  // const [completed, setCompleted] = useState(1);

  const completeTask = () => {
    if (task.completed) {
      task.completed = false;
      return;
    }
    task.completed = true;
  };

  const removeTaskHandler = (taskId) => {
    removeTask(taskId);
  }

  return (
    <div
      className="task-list__item"
      style={{ opacity: task.completed && "0.5" }}
    >
      <button className="complete-btn" onClick={completeTask}>
        <img
          src={
            task.completed
              ? require("../../images/checked.jpg")
              : require("../../images/unchecked.jpg")
          }
          alt="checked unchecked"
        />
      </button>

      <input
        className="task-title"
        style={{
          textDecoration: task.completed && "line-through",
        }}
        defaultValue={task.title}
      />

      <button className="delete-btn" onClick={() => removeTaskHandler(task.id)}>
        <img
          src={require("../../images/red-cross-circle_icon.png")}
          alt="red cross icon"
          style={{ width: "15px", height: "15px", borderRadius: "50%" }}
        />
      </button>
    </div>
  );
};

export default TodoItem;
