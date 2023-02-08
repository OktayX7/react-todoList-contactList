import React from "react";

const Input = ({ type, className, placeholder, id, required }) => {
  return <input id={id} type={type} className={className} placeholder={placeholder} required={required} />;
};

Input.defaultProps = {
  required: false,
  type: "text",
  className: "form-control",
  placeholder: "",
};

export default Input;
