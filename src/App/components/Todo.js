import React, { useState } from "react";

const Todo = ({ id, name, completed, deleteTask, editTask }) => {
  const [isEditing, setEditing] = useState(false);
  const [newName, setName] = useState("");
  const handleDelete = (e) => {
    e.preventDefault();
    deleteTask(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(id, newName);
    setEditing(false);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setEditing(true);
  };

  if (isEditing) {
    return (
      <form className="stack-small" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="todo-label" htmlFor={id}>
            New name for {name}
          </label>
          <input
            id={id}
            className="todo-text"
            type="text"
            value={newName}
            onChange={handleChange}
          />
        </div>
        <div className="btn-group">
          <button type="button" className="btn todo-cancel">
            Cancel
            <span className="visually-hidden">renaming {name}</span>
          </button>
          <button type="submit" className="btn btn__primary todo-edit">
            Save
            <span className="visually-hidden">new name for {name}</span>
          </button>
        </div>
      </form>
    );
  }
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input id={id} type="checkbox" defaultChecked={completed} />
        <label className="todo-label" htmlFor={id}>
          {name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn" onClick={handleEdit}>
          Edit <span className="visually-hidden">{name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={handleDelete}
        >
          Delete <span className="visually-hidden">{name}</span>
        </button>
      </div>
    </li>
  );
};

export default Todo;
