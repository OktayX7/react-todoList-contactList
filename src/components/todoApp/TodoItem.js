import React from "react";
import Button from "../partials/Button";
import TodoUpdate from "../partials/TodoUpdate";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";

const TodoItem = ({ todo, deleteTodo, updateTodo, completeTodo, updateTodoText }) => {
  return (
    <li className="list-group-item ">
      <div className="d-flex justify-content-between align-items-center p-1">
        <p className="fs-4 ms-1 fw-semibold mb-0">{todo.text}</p>
        {todo.isCompleted && (
          <p className="fs-4 ms-1 fw-semibold mb-0 text-success">
            <DoneIcon className="mb-1" /> Completed
          </p>
        )}
        <div>
          <Button variant="danger" size="md" onClick={() => deleteTodo(todo.id)}>
            Delete
          </Button>

          {todo.isUpdated ? (
            <Button variant="secondary" size="md" className={"mx-2"} onClick={() => updateTodo(todo.id)}>
              <CloseIcon />
            </Button>
          ) : (
            <Button variant="warning" size="md" className={"mx-2"} onClick={() => updateTodo(todo.id)}>
              Update
            </Button>
          )}

          {todo.isCompleted ? (
            <Button variant="secondary" size="md" onClick={() => completeTodo(todo.id)}>
              Undo
            </Button>
          ) : (
            <Button variant="success" size="md" onClick={() => completeTodo(todo.id)}>
              Completed
            </Button>
          )}
        </div>
      </div>
      {todo.isUpdated && <TodoUpdate todo={todo} updateTodoText={updateTodoText} />}
    </li>
  );
};

export default TodoItem;
