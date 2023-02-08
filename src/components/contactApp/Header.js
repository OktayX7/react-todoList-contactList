import React from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";

const Header = () => {
  return (
    <header className="bg-danger">
      <div className="container d-flex align-items-center justify-content-center py-3">
        <AssignmentIcon className="text-white fs-1" />
        <h1 className="text-white text-center ms-3 fw-bolder">Contact List App</h1>
      </div>
    </header>
  );
};

export default Header;
