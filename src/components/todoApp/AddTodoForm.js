import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import InputGroup from "../partials/InputGroup";
import Alert from "../partials/Alert";
import { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [displayAlert, setdisplayAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = e.target[0].value;
    if (todo === "") {
      setdisplayAlert(true);

      setTimeout(() => {
        setdisplayAlert(false);
      }, 2000);
      return;
    } else {
      addTodo(todo);
    }
    e.target[0].value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="my-4">
        <div className="d-flex align-items-center justify-content-center mb-3">
          <h2 className="me-3 text-secondary fw-bold">New Todo</h2>
          <ArrowDownwardIcon className="fs-2 text-danger fw-bolder" />
        </div>
        {displayAlert && (
          <Alert
            variant={"warning"}
            text={"Please enter something to do"}
            className={"mb-4 w-50 mx-auto text-center"}
          />
        )}
        <InputGroup inpGrpClassName={"container"} />
      </form>
    </div>
  );
};

export default AddTodoForm;
