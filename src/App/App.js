import React, { useState } from "react";
import Form from "./components/Form";
import FilterBar from "./components/FilterBar";
import Todo from "./components/Todo";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false },
  ]);

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  };

  const editTask = (id, name) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, name };
      }

      return task;
    });

    setTasks(newTasks);
  };

  const tasksList = tasks.map(({ id, name, completed }) => (
    <Todo
      key={id}
      id={id}
      name={name}
      completed={completed}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));

  const addTask = (name) => {
    const newTask = {
      id: `todo-${tasks.length}`,
      name,
      completed: false,
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  return (
    <div className="todoapp stack-large">
      <h1>ToDo App</h1>
      <Form addTask={addTask} />
      <FilterBar />
      <h2 id="list-heading">3 tasks remaining</h2>

      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {tasksList}
      </ul>
    </div>
  );
};

export default App;
