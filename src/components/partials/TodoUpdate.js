import React from "react";
import InputGroup from "./InputGroup";

const TodoUpdate = ({ updateTodoText, todo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    updateTodoText(todo.id, text);

    todo.isUpdated = !todo.isUpdated;
  };

  return (
    <form onSubmit={handleSubmit} className="my-2 container">
      <InputGroup inpPlaceHolder="New todo enter" btnVariant="info" btnChildren="Update" />
    </form>
  );
};

export default TodoUpdate;
