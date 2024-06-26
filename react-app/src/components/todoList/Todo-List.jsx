import React, { useState } from "react";
import "./Todo.scss";
import TodoAddTask from "./Todo-add-task";
import TodoFilters from "./Todo-filters";
import TodoItem from "./Todo-item";
import TodoHeader from "./Todo-header";
import { taskList } from "./taskList";

const TodoList = () => {
  const [tasks, setTasks] = useState(taskList);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTasks((prevState) => [...prevState, newTask]);
  };

  const removeTask = (taskId) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== taskId));
  };

  return (
    // .To Do
    <div className="todo">
      {/* Header */}
      <TodoHeader />

      {/* Add item to Todo List */}
      <TodoAddTask addTask={addTask} />

      <div className="todo-wrapper">
        {/* Filters */}
        <TodoFilters />

        {/* Task list */}
        <div className="task-list">
          {/* Fill task list with basic tasks */}
          {taskList.map((task) => (
            <TodoItem key={task.id} task={task} removeTask={removeTask} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
