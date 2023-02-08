import React from "react";

const Label = ({ forr, className, children }) => {
  return (
    <label htmlFor={forr} className={className}>
      {children}
    </label>
  );
};

Label.defaultProps = {
  forr: "",
  className: "form-label",
  children: "First name",
};

export default Label;
