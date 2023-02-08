import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, completeTodo, updateTodo, updateTodoText }) => {
  return (
    <div>
      <ul className="list-group container my-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            completeTodo={completeTodo}
            updateTodoText={updateTodoText}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
