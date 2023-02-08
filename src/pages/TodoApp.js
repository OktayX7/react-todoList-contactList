import Header from "../components/todoApp/Header";
import AddTodoForm from "../components/todoApp/AddTodoForm";
import TodoList from "../components/todoApp/TodoList";
import { useEffect, useState } from "react";
import BtnGroup from "../components/todoApp/BtnGroup";
const localStorageKey = "todoApp.todos";

function App() {
  const [todos, setTodos] = useState(() => {
    const localData = JSON.parse(localStorage.getItem(localStorageKey));
    return localData ? localData : [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    const id = todos.length + 1;
    const newTodo = {
      id: id,
      text: todo,
      isCompleted: false,
      isUpdated: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  const updateTodo = (id) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isUpdated = !todo.isUpdated;
      }
      return todo;
    });
    setTodos(newTodo);
  };

  const completeTodo = (id) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newTodo);
  };

  const updateTodoText = (id, text) => {
    const newTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.text = text;
      }
      return todo;
    });
    setTodos(newTodo);
  };

  return (
    <>
      <Header />
      <AddTodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        completeTodo={completeTodo}
        updateTodoText={updateTodoText}
      />
      <BtnGroup todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
