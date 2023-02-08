import Button from "../partials/Button";
import React from "react";

const BtnGroup = ({ todos, setTodos }) => {
  const deleteAll = () => {
    const newTodos = [];
    setTodos(newTodos);
  };

  const deleteCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.isCompleted);
    setTodos(newTodos);
  };

  return todos.length > 0 ? (
    <div className="d-flex justify-content-around container">
      <Button onClick={() => deleteAll()} variant={"danger"} className={"d-block w-25 fw-bolder"}>
        Delete All
      </Button>
      {todos.some((todo) => todo.isCompleted) && (
        <Button onClick={() => deleteCompleted()} variant={"info"} className={"d-block w-25 fw-bolder"}>
          Delete Completed
        </Button>
      )}
    </div>
  ) : (
    ""
  );
};

export default BtnGroup;
